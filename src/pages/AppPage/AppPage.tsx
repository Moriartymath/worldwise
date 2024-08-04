import TravelInfo from "../../components/TravelInfo/TravelInfo";
import styles from "./AppPage.module.css";
import Map from "../../components/Map/Map";
import { Outlet } from "react-router";

import { CitiesProvider } from "../../contexts/CitiesContext";
import Logout from "../../components/Logout/Logout";

function AppPage() {
  return (
    <div className={styles.appContainer}>
      <CitiesProvider>
        <TravelInfo>
          <Outlet />
        </TravelInfo>
        <Map />
      </CitiesProvider>
      <Logout />
    </div>
  );
}

export default AppPage;
