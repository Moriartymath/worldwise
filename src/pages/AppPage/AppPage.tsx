import TravelInfo from "../../components/TravelInfo/TravelInfo";
import { loginContext } from "../../contexts/LoginContext";
import { useContext } from "react";
import styles from "./AppPage.module.css";
import { Outlet } from "react-router";

function AppPage() {
  const loginObj = useContext(loginContext);
  console.log(loginObj);
  return (
    <div className={styles.appContainer}>
      <TravelInfo />
    </div>
  );
}

export default AppPage;
