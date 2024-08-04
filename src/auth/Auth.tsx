import { Navigate, Outlet } from "react-router";
import { useUser } from "../contexts/LoginContext";

function Auth() {
  const { user } = useUser();
  if (!user) return <Navigate to={"/login"} />;
  return <Outlet />;
}

export default Auth;
