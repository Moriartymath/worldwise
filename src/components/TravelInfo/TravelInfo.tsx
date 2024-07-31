import styles from "./TravelInfo.module.css";
import logo from "../../assets/logo.png";
import CitiesList from "./CitiesList/CitiesList";
import { Link, Outlet } from "react-router-dom";

function TravelInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} />
      </div>
      <div>
        <Link to="cities">
          <button className={styles.button}>Cities</button>
        </Link>
        <Link to="countries">
          <button className={styles.button}>Countries</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default TravelInfo;
