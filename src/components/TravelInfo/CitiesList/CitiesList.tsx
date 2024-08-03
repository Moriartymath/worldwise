import City from "./City/City";
import { CityType } from "../../../types/types";
import styles from "./CitiesList.module.css";
import { useCities } from "../../../contexts/CitiesContext";

function CitiesList() {
  const { citiesList, isLoading } = useCities();

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
