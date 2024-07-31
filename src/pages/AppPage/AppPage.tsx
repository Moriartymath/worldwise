import TravelInfo from "../../components/TravelInfo/TravelInfo";
import { loginContext } from "../../contexts/LoginContext";
import { useContext } from "react";
import styles from "./AppPage.module.css";
import Map from "../../components/Map/Map";

function AppPage() {
  const loginObj = useContext(loginContext);
  console.log(loginObj);
  return (
    <div className={styles.appContainer}>
      <TravelInfo />
      <Map />
    </div>
  );
}

export default AppPage;
