import City from "./City/City";
import { CityType } from "../../../types/types";
import styles from "./CitiesList.module.css";
import { useContext } from "react";
import { client } from "../../../client/client";
import { defer } from "react-router-dom";
import { useCities } from "../../../contexts/CitiesContext";

type CitiesListType = Array<CityType>;

export async function loader() {
  return defer({ res: client.get("cities") });
}

function CitiesList() {
  const { citiesList } = useCities();
  return (
    <ul className={styles.cityList}>
      {citiesList.map((city: CityType) => (
        <City cityObj={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CitiesList;
