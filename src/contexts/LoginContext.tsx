import React, { createContext } from "react";

type loginObjType = {
  email: string;
  password: string;
  setInfo: (email: string, password: string) => void;
};
const loginObj: loginObjType = {
  email: "",
  password: "",
  setInfo(email: string, password: string) {
    this.email = email;
    this.password = password;
  },
};

export const loginContext = createContext(
  loginObj
) as React.Context<loginObjType>;
