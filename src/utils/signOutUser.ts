import { UserInterface } from "../context/UserContext";

const signOutUser = (
  userContext: {
    user: UserInterface | null;
    setUser: React.Dispatch<any>;
  } | null
) => {
  window.localStorage.removeItem("token");
  userContext?.setUser(undefined);
};

export default signOutUser;
