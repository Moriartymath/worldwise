import useLocalStorage from "../../../hooks/useLocalStorage";
import styles from "./CountriesList.module.css";
import { CountryType } from "../../../types/types";
import Country from "./Country/Country";
import { useContext } from "react";
import { CitiesContext } from "../../../contexts/CitiesContext";

function CountriesList() {
  const cities = useContext(CitiesContext);

  const allCountries = [...new Set(cities.map((city) => city.country))];

  return (
    <ul className={styles.list}>
      {allCountries.map((countryName) => (
        <Country
          countryObj={{
            flag: cities.find((city) => city.country === countryName)?.emoji,
            name: countryName,
          }}
        />
      ))}
    </ul>
  );
}

export default CountriesList;
