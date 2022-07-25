import React, { createContext, useState } from "react";

export interface UserInterface {
  email?: string;
  name?: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
}

const UserContext = createContext<{
  user: UserInterface | null;
  setUser: React.Dispatch<any>;
} | null>(null);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
