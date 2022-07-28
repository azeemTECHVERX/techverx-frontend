import { PostByAndLike } from "./interface";
import React, { useContext } from "react";
import CancelIcon from "../cancelicon/CancelIcon";
import { useDeleteComment } from "../../hooks/useDeleteComment";
import Moment from "react-moment";
import { queryClient } from "../..";
import toast from "react-hot-toast";
import UserContext from "../../context/UserContext";
interface CommentCardProps {
  text: string;
  user: PostByAndLike;
  id: string;
  date: Date;
  postId: string;
}

const CommentsCard: React.FC<CommentCardProps> = ({
  text,
  user,
  id,
  postId,
  date,
}) => {
  const { mutateAsync } = useDeleteComment();
  const userContext = useContext(UserContext);

  const deleteComment = (postId: string, id: string) => {
    mutateAsync({ id, postId })
      .then(() => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Comment has been removed.", {
          duration: 2000,
          id: "deleteCommentSuccess",
        });
      })
      .catch(() =>
        toast.error("Error while removing comment", {
          duration: 2000,
          id: "deleteCommentError",
        })
      );
  };

  return (
    <div className="px-10 relative">
      {userContext?.user?._id === user._id && (
        <div
          onClick={() => deleteComment(postId, id)}
          className="absolute top-3 right-3"
        >
          <CancelIcon />
        </div>
      )}
      <div className="flex w-full p-8">
        <span className="h-10 w-10 flex-shrink-0 rounded-full flex font-normal items-center justify-center bg-gradient-to-r from-sky-400 to-blue-500">
          AZ
        </span>
        <div className="ml-4 flex flex-grow flex-col">
          <div className="flex">
            <span className="font-semibold">{user.name}</span>
            <span className="ml-auto text-sm">
              <Moment format="MMMM Do YYYY, h:mm a">{date}</Moment>
            </span>
          </div>
          <p className="mt-1 max-w-xl">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
