import { useNavigate } from "react-router-dom";
import { CityType } from "../../../../types/types";
import styles from "./City.module.css";

type CityProps = {
  cityObj: CityType;
};

function City({ cityObj }: CityProps) {
  const navigate = useNavigate();

  return (
    <li
      className={styles.listItem}
      onClick={() =>
        navigate(
          `${cityObj.id}?lat=${cityObj.position.lat}&lng=${cityObj.position.lng}`
        )
      }
    >
      <div className={styles.emogiNameContainer}>
        <span style={{ transform: "scale(2)" }}>{cityObj.emoji}</span>
        <p>{cityObj.cityName}</p>
      </div>
      <p>{new Date(cityObj.date).toLocaleDateString()}</p>
      <button className={styles.button}>&times;</button>
    </li>
  );
}

export default City;
