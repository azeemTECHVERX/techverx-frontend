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

  if (data) {
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
      <ErrorSnackbar errorMsg="No Posts to show" />
    </div>
  );
};

export default Post;
