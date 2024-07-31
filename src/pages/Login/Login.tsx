import React, { useReducer, useContext } from "react";
import styles from "./Login.module.css";
import { Link, Navigate } from "react-router-dom";
import { loginContext } from "../../contexts/LoginContext";

type loginInfoType = {
  email: string;
  password: string;
};

type actionDispathType = {
  type: string;
  payload: string;
};
enum actions {
  changeEmail = "setEmailAddress",
  changePassword = "setPassword",
}

function reducer(
  state: loginInfoType,
  action: actionDispathType
): loginInfoType {
  switch (action.type) {
    case actions.changeEmail:
      return { ...state, email: action.payload };
    case actions.changePassword:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function Login() {
  const loginObj = useContext(loginContext);

  const [loginInfo, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  }) as [loginInfoType, (action: actionDispathType) => void];

  function handleOnChange(
    ev: React.ChangeEvent<HTMLInputElement>,
    type: actions
  ) {
    dispatch({ type, payload: ev.target.value });
  }

  if (loginObj.email && loginObj.password) {
    console.log("All info context: ", loginObj.email, loginObj.password);
    return <Navigate to="/app" />;
  }

  return (
    <form className={styles.loginForm}>
      <div className={styles.inputContainer}>
        <p>Email adress</p>
        <input
          value={loginInfo.email}
          onChange={(ev) => handleOnChange(ev, actions.changeEmail)}
        />
      </div>
      <div className={styles.inputContainer}>
        <p>Password</p>
        <input
          value={loginInfo.password}
          type="password"
          onChange={(ev) => handleOnChange(ev, actions.changePassword)}
        />
      </div>
      <Link
        to={"/app"}
        state={loginInfo}
        onClick={() => {
          loginObj.setInfo(loginInfo.email, loginInfo.password);
        }}
      >
        <button className={styles.loginButton}>Login</button>
      </Link>
    </form>
  );
}

export default Login;
