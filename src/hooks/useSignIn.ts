import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import config from "../config";

const signInUser = (values: any) => {
  return axios.post(`${config.backendUrl}/api/login`, {
    email: values.email,
    password: values.password,
  });
};

export const useSignIn = () => {
  return useMutation(signInUser);
};
