import TravelInfo from "../../components/TravelInfo/TravelInfo";
import { loginContext } from "../../contexts/LoginContext";
import { useContext, useEffect } from "react";
import styles from "./AppPage.module.css";
import Map from "../../components/Map/Map";
import {
  Await,
  Navigate,
  Outlet,
  useLoaderData,
  useNavigate,
} from "react-router";
import { AxiosResponse } from "axios";
import { CityType } from "../../types/types";
import React from "react";
import { CitiesProvider } from "../../contexts/CitiesContext";

function AppPage() {
  const { res } = useLoaderData() as { res: AxiosResponse<CityType[]> };
  console.log(res);
  const loginObj = useContext(loginContext);

  return (
    <div className={styles.appContainer}>
      <React.Suspense fallback={<h1>Custom loading...</h1>}>
        <Await resolve={res} errorElement={<h2>Something went wrong 😔</h2>}>
          {(res) => {
            return (
              <CitiesProvider res={res.data}>
                <TravelInfo>
                  <Outlet />
                </TravelInfo>
                <Map />
              </CitiesProvider>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
}

export default AppPage;
