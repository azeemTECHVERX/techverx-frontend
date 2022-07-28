import React from "react";
import CommentsCard from "./CommentCard";
import CreateComment from "./CreateComment";
import { PostInterface } from "./interface";

interface CommentProps {
  post: PostInterface;
}

const Comment: React.FC<CommentProps> = ({ post }) => {
  return (
    <div className="space-y-3">
      {post.comments.length ? (
        post.comments.map((comment) => {
          return (
            <CommentsCard
              text={comment.text}
              user={comment.user}
              key={comment._id}
              id={comment._id}
              postId={post._id}
              date={comment.date}
            />
          );
        })
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex items-center p-6 space-x-4 rounded-md">
            <span>No Comments on this Post</span>
          </div>
        </div>
      )}
      <div className="px-20 mx-2 flex justify-center">
        <CreateComment id={post._id} />
      </div>
    </div>
  );
};

export default Comment;
