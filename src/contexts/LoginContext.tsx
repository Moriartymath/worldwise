import React, { createContext, useContext, useState } from "react";
import { userClient } from "../client/client";
import { useQuery } from "react-query";

type LoginProviderProps = {
  children: React.ReactElement;
};
type UserInfoType = {
  email: string;
  password: string;
};
const LoginContext = createContext(null) as React.Context<null | {
  user: UserInfoType | null;
  setUser: Function;
  loginUser: (email: string, password: string) => Promise<boolean | null>;
}>;

async function loginUser(
  email: string,
  password: string
): Promise<boolean | null> {
  console.log(email, password);
  if (!email.length || !password.length) return null;
  const res = await userClient.get("users", {
    params: {
      email,
    },
  });
  const data = res.data as UserInfoType[];
  console.log(data);
  if (!data.length) return false;
  if (data[0].password === password) return true;
  else return false;
}

function LoginProvider({ children }: LoginProviderProps) {
  const [user, setUser] = useState(null) as [UserInfoType | null, Function];

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        loginUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

function useUser() {
  const context = useContext(LoginContext);
  if (!context)
    throw new Error("You have to use this context with LoginProvider");
  return context;
}

export { useUser, LoginProvider };
