import styles from "./TravelInfo.module.css";
import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

function TravelInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} />
      </div>
      <div className={styles.tabs}>
        <Link to="cities">
          <button className={styles.tab}>Cities</button>
        </Link>
        <Link to="countries">
          <button className={styles.tab}>Countries</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default TravelInfo;
