import TravelInfo from "../../components/TravelInfo/TravelInfo";
import { loginContext } from "../../contexts/LoginContext";
import { useContext } from "react";
import styles from "./AppPage.module.css";
import Map from "../../components/Map/Map";
import { Outlet } from "react-router";

import { CitiesProvider } from "../../contexts/CitiesContext";

function AppPage() {
  const loginObj = useContext(loginContext);

  return (
    <div className={styles.appContainer}>
      <CitiesProvider>
        <TravelInfo>
          <Outlet />
        </TravelInfo>
        <Map />
      </CitiesProvider>
    </div>
  );
}

export default AppPage;
