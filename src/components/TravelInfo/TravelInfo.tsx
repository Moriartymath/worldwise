import styles from "./TravelInfo.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

type TravelInfoProps = {
  children: React.ReactElement;
};

function TravelInfo({ children }: TravelInfoProps) {
  const [selectedButton, setSelectedButton] = useState("cities");

  function handleOnClick(buttonName: string) {
    setSelectedButton(buttonName);
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} />
      </div>
      <div className={styles.tabs}>
        <Link to="cities" onClick={() => handleOnClick("cities")}>
          <button
            className={`${styles.tab} ${
              selectedButton === "cities" ? styles.active : ""
            }`}
          >
            Cities
          </button>
        </Link>
        <Link to="countries" onClick={() => handleOnClick("countries")}>
          <button
            className={`${styles.tab} ${
              selectedButton === "countries" ? styles.active : ""
            }`}
          >
            Countries
          </button>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default TravelInfo;
