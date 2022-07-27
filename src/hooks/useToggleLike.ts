import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const toggleLike = (id: string) => {
  const token = window.localStorage.getItem("token");
  return axios.post(
    `${config.backendUrl}/api/post/${id}`,
    {},
    {
      headers: {
        Authorization: token ? token : "",
      },
    }
  );
};

export const useToggleLike = () => {
  return useMutation(toggleLike);
};
