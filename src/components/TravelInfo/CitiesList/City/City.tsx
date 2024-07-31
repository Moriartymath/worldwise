import { CityType } from "../../../../types/types";
import styles from "./City.module.css";

type CityProps = {
  setSelectedCityId: Function;
  cityObj: CityType;
};

function City({ cityObj, setSelectedCityId }: CityProps) {
  return (
    <li
      className={styles.listItem}
      onClick={() => {
        setSelectedCityId(cityObj.id);
      }}
    >
      <span>{cityObj.emoji}</span>
      <p>{cityObj.cityName}</p>
      <p>{new Date(cityObj.date).toLocaleDateString()}</p>
      <button className={styles.button}>&times;</button>
    </li>
  );
}

export default City;
