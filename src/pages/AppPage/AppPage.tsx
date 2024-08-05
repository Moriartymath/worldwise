import TravelInfo from "../../components/TravelInfo/TravelInfo";
import styles from "./AppPage.module.css";
import { Outlet } from "react-router";
import { CitiesProvider } from "../../contexts/CitiesContext";
import Logout from "../../components/Logout/Logout";
import { Suspense, lazy } from "react";
const Map = lazy(() => import("../../components/Map/Map"));
function AppPage() {
  return (
    <div className={styles.appContainer}>
      <CitiesProvider>
        <TravelInfo>
          <Suspense fallback={<h1>Loading Outlet</h1>}>
            <Outlet />
          </Suspense>
        </TravelInfo>
        <Suspense
          fallback={
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Loading Map</h1>
            </div>
          }
        >
          <Map />
        </Suspense>
      </CitiesProvider>
      <Logout />
    </div>
  );
}

export default AppPage;
