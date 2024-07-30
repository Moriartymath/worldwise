import React, { useReducer } from "react";
import styles from "./Login.module.css";

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

  console.log(loginInfo.email, loginInfo.password);

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
      <button className={styles.loginButton}>Login</button>
    </form>
  );
}

export default Login;
