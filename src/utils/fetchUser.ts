import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { UserInterface } from "../context/UserContext";
import config from "../config";

const fetchUser = (
  userContext: {
    user: UserInterface | null;
    setUser: React.Dispatch<any>;
  } | null,
  token: string | null,
  navigate: NavigateFunction
) => {
  if (!userContext?.user) {
    if (!token) {
      navigate("/signin");
    } else if (token) {
      axios
        .get(`${config.backendUrl}/api/user`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => userContext?.setUser(response.data));
    }
  }
};

export default fetchUser;
