import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const getPosts = () => {
  const token = window.localStorage.getItem("token");
  return axios.get(`${config.backendUrl}/api/posts`, {
    headers: {
      Authorization: token ? token : "",
    },
  });
};

export const usePosts = () => {
  return useQuery(["posts"], getPosts);
};
