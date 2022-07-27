import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const createPost = (values: any) => {
  const token = window.localStorage.getItem("token");
  return axios.post(
    `${config.backendUrl}/api/posts`,
    {
      postBy: values.id,
      title: values.title,
      text: values.text,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
};

export const useCreatePost = () => {
  return useMutation(createPost);
};
