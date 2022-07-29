// Libraries
import React, { useContext, useState } from "react";
import Moment from "react-moment";
import toast from "react-hot-toast";
import { ChatAlt2Icon, HeartIcon } from "@heroicons/react/solid";
// Components
import CancelIcon from "../cancelicon/CancelIcon";
import Comment from "./Comment";
import { PostCardProps } from "./interface";
import FadeAnimator from "../animators/FadeAnimator";
// Context
import UserContext from "../../context/UserContext";
// Hookes
import { useDeletePost } from "../../hooks/useDeletePost";
import { useToggleLike } from "../../hooks/useToggleLike";
// Utils
import {
  isLiked,
  deletePost,
  toggleLike,
} from "../../utils/postHelpers/postHelpers";

const PostCard = ({ posts }: PostCardProps) => {
  const userContext = useContext(UserContext);
  const mutateDeleteObject = useDeletePost();
  const mutateLikeObject = useToggleLike();
  const [openComments, setOpenComments] = useState<any>({
    visible: false,
    postId: "",
  });

  return (
    <React.Fragment>
      {posts.map((post) => {
        return (
          <div key={post._id} className="rounded-2xl m-4 w-fit relative">
            <div className="w-full rounded-2xl h-full bg-slate-100 opacity-60 absolute -z-10"></div>
            {userContext?.user?._id === post.postBy._id ? (
              <div
                className="absolute top-4 right-4"
                onClick={() => deletePost(mutateDeleteObject, post._id)}
              >
                <CancelIcon />
              </div>
            ) : null}
            <div className="container max-w-2xl px-10 py-6 mx-auto rounded-lg shadow-sm ">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  <Moment format="MMMM Do YYYY, h:mm:ss a">
                    {post.createdAt}
                  </Moment>
                </span>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold">{post.title}</p>
                <p className="mt-2">{post.text}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="flex items-center">
                    <div className="object-cover w-10 h-10 mx-4 bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center rounded-full shadow">
                      <p>{post.postBy.name.toUpperCase().substring(0, 2)}</p>
                    </div>
                    <span className="">{post.postBy.name}</span>
                  </div>
                </div>

                <div className="space-x-4 flex">
                  <div className="flex space-x-2">
                    <HeartIcon
                      onClick={() => toggleLike(mutateLikeObject, post._id)}
                      className={`h-6 w-6  ${
                        isLiked(post, userContext?.user?._id)
                          ? "text-red-500"
                          : "text-slate-500"
                      } hover:scale-110 transition-all ease-in-out hover:cursor-pointer`}
                    />
                    {post.likes.length ? (
                      <p className="text-slate-600">{post.likes.length}</p>
                    ) : null}
                  </div>
                  <div className="flex space-x-2">
                    <ChatAlt2Icon
                      onClick={() =>
                        setOpenComments({
                          visible: !openComments.visible,
                          postId: post._id,
                        })
                      }
                      className="h-6 w-6 text-slate-500 hover:scale-110 transition-all ease-in-out hover:cursor-pointer"
                    />
                    {post.comments.length ? (
                      <p className="text-slate-600">{post.comments.length}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            {openComments.visible && post._id === openComments.postId && (
              <FadeAnimator>
                <Comment post={post} />
              </FadeAnimator>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default PostCard;
