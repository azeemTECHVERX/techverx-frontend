import React from "react";
import Moment from "react-moment";

interface PostByAndLike {
  _id: string;
  name: string;
}

interface PostInterface {
  _id: string;
  postBy: PostByAndLike;
  text: string;
  title: string;
  likes: PostByAndLike[] | [];
  comments: CommentInterface[] | [];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface CommentInterface {
  _id: string;
  date: Date;
  text: string;
  user: PostByAndLike;
}

interface PostCardProps {
  posts: PostInterface[];
}

const PostCard = ({ posts }: PostCardProps) => {
  return (
    <React.Fragment>
      {posts.map((post) => {
        return (
          <div key={post._id} className="bg-slate-300 rounded-2xl m-4 w-fit">
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
                    <div className="object-cover w-10 h-10 mx-4 bg-blue-200 flex items-center justify-center rounded-full shadow">
                      <p>{post.postBy.name.toUpperCase().substring(0, 2)}</p>
                    </div>
                    <span className="hover:underline">{post.postBy.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default PostCard;
