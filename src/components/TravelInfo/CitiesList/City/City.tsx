import { useNavigate } from "react-router-dom";
import { CityType } from "../../../../types/types";
import styles from "./City.module.css";
import { useCities } from "../../../../contexts/CitiesContext";

type CityProps = {
  cityObj: CityType;
};

function City({ cityObj }: CityProps) {
  const navigate = useNavigate();
  const { deleteCityMutation } = useCities();

  return (
    <li className={styles.listItem}>
      <div
        className={styles.emogiNameContainer}
        onClick={() =>
          navigate(
            `${cityObj.id}?lat=${cityObj.position.lat}&lng=${cityObj.position.lng}`
          )
        }
      >
        <span style={{ transform: "scale(2)" }}>{cityObj.emoji}</span>
        <p>{cityObj.cityName}</p>
      </div>
      <p>{new Date(cityObj.date).toLocaleDateString()}</p>
      <button
        className={styles.button}
        onClick={async () => {
          await deleteCityMutation(cityObj.id);
        }}
      >
        &times;
      </button>
    </li>
  );
}

export default City;
