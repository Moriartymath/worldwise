import City from "./City/City";
import { CityType } from "../../../types/types";
import styles from "./CitiesList.module.css";
import { useContext } from "react";
import { client } from "../../../client/client";
import { defer, useActionData } from "react-router-dom";
import { useCities } from "../../../contexts/CitiesContext";

type CitiesListType = Array<CityType>;

function CitiesList() {
  const { citiesList, isLoading, addCityMutation } = useCities();
  const actionData = useActionData();

  if (isLoading) return <h1>Loading query...</h1>;

  return (
    <ul className={styles.cityList}>
      {citiesList?.map((city: CityType) => (
        <City cityObj={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CitiesList;
