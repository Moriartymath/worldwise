import City from "./City/City";
import { CityType } from "../../../types/types";
import styles from "./CitiesList.module.css";
import { useState } from "react";
import CityPreview from "./CityPreview/CityPreview";
import { client } from "../../../client/client";
import { Await, defer, useLoaderData } from "react-router-dom";
import React from "react";
import { AxiosPromise, AxiosResponse } from "axios";

type CitiesListType = Array<CityType>;

export async function loader() {
  return defer({ res: client.get("cities") });
}

function CitiesList() {
  const { res } = useLoaderData() as { res: AxiosResponse<CitiesListType> };

  const [selectedCityId, setSelectedCityId] = useState(null);

  if (selectedCityId !== null) {
    return (
      <CityPreview
        setSelectedCityId={setSelectedCityId}
        cityObj={res.data.find((city) => city.id === selectedCityId)!}
      />
    );
  }
  return (
    <React.Suspense fallback={<h1>loading...</h1>}>
      <Await resolve={res}>
        {(res) => {
          console.log(res);
          return (
            <ul className={styles.cityList}>
              {res.data.map((city: CityType) => (
                <City
                  cityObj={city}
                  key={city.id}
                  setSelectedCityId={setSelectedCityId}
                />
              ))}
            </ul>
          );
        }}
      </Await>
    </React.Suspense>
  );
}

export default CitiesList;
