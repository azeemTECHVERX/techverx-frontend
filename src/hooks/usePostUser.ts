import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const addUser = (values: any) => {
  return axios.post(`${config.backendUrl}/api/users`, {
    name: values.name,
    email: values.email,
    password: values.password,
  });
};

export const usePostUser = () => {
  return useMutation(addUser);
};
