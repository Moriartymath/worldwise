import React, { useReducer } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/LoginContext";

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
  const { setUser, loginUser } = useUser();
  const navigate = useNavigate();

  const [loginInfo, dispatch] = useReducer(reducer, {
    email: "",
    password: "",
  }) as [loginInfoType, (action: actionDispathType) => void];

  console.log(loginInfo);
  function handleOnChange(
    ev: React.ChangeEvent<HTMLInputElement>,
    type: actions
  ) {
    dispatch({ type, payload: ev.target.value });
  }

  return (
    <form
      className={styles.loginForm}
      onSubmit={async (ev) => {
        ev.preventDefault();
        const res = await loginUser(loginInfo.email, loginInfo.password);
        if (res) {
          setUser({ email: loginInfo.email, password: loginInfo.password });
          navigate("/app");
        } else console.log("Credential is wrong");
      }}
    >
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
