import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const createComment = (values: any) => {
  const token = window.localStorage.getItem("token");
  return axios.post(
    `${config.backendUrl}/api/comment/${values.id}`,
    {
      text: values.text,
    },
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
};

export const useCreateComment = () => {
  return useMutation(createComment);
};
