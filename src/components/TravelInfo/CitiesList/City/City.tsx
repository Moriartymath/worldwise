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
        console.log("clicked!");
        setSelectedCityId(cityObj.id);
      }}
    >
      <p>{cityObj.country}</p>
      <p>{cityObj.lastVisited}</p>
      <button className={styles.button}>&times;</button>
    </li>
  );
}

export default City;
