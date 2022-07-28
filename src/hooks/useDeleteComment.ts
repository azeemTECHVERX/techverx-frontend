import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const deleteComment = (data: any) => {
  const token = window.localStorage.getItem("token");
  return axios.delete(
    `${config.backendUrl}/api/posts/${data.postId}/comment/${data.id}`,
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
};

export const useDeleteComment = () => {
  return useMutation(deleteComment);
};
