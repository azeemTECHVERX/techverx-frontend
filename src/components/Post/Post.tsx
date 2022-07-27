import React from "react";
import PostCard from "./PostCard";
import { usePosts } from "../../hooks/usePosts";
import Loader from "../loader/Loader";
import ErrorSnackbar from "../errorSnackbar/ErrorSnackbar";

const Post: React.FC = () => {
  const { data, isLoading, isError } = usePosts();
  if (isLoading) {
    return (
      <div className="mt-20">
        <Loader />
      </div>
    );
  }

  if (data && data.data.length) {
    return (
      <div className="flex flex-col justify-center">
        <PostCard posts={data.data} />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <ErrorSnackbar errorMsg="Error While Fetching" />
      </div>
    );
  }
  return (
    <div className="mt-20">
      <div className="p-4 text-sm text-gray-700 flex items-center bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300">
        <div className="font-medium text-2xl">Sorry!</div>
        <div className="ml-10 text-lg">No Posts to show.</div>
      </div>
    </div>
  );
};

export default Post;
