import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const deletePost = (id: string) => {
  const token = window.localStorage.getItem("token");
  return axios.delete(`${config.backendUrl}/api/post/${id}`, {
    headers: {
      Authorization: token ? token : "",
    },
  });
};

export const useDeletePost = () => {
  return useMutation(deletePost);
};
