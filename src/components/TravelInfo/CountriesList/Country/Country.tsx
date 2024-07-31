import styles from "./Country.module.css";
import { CountryType } from "../../../../types/types";

type CountryProps = {
  countryObj: CountryType;
};

function Country({ countryObj }: CountryProps) {
  return (
    <li className={styles.country}>
      <div className={styles.imageContainer}></div>
      <h3>{countryObj.name}</h3>
    </li>
  );
}

export default Country;
