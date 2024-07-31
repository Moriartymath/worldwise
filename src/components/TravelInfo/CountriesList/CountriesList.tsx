import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./CountriesList.module.css";
import { CountryType } from "../../../types/types";
import Country from "./Country/Country";

function CountriesList() {
  const [countriesList, setCountriesList] = useLocalStorage("countries") as [
    CountryType[],
    Function
  ];

  return (
    <ul className={styles.list}>
      {countriesList.map((country) => (
        <Country countryObj={country} />
      ))}
    </ul>
  );
}

export default CountriesList;
