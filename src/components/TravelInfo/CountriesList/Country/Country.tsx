import styles from "./Country.module.css";
import { CountryType } from "../../../../types/types";

type CountryProps = {
  countryObj: CountryType;
};

function Country({ countryObj }: CountryProps) {
  return (
    <li className={styles.country}>
      <span style={{ transform: "scale(3)" }}>{countryObj.flag}</span>
      <h3>{countryObj.name}</h3>
    </li>
  );
}

export default Country;
