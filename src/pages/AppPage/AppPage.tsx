import { useLocation } from "react-router";

function AppPage() {
  const { email, password } = useLocation().state;
  console.log(email, password);
  return <div></div>;
}

export default AppPage;
