import styles from "./CountriesList.module.css";
import { CityType } from "../../../types/types";
import Country from "./Country/Country";
import { useCities } from "../../../contexts/CitiesContext";

function CountriesList() {
  const { citiesList, isLoading } = useCities();

  if (isLoading) return <h1>Loading countries query!</h1>;

  const allCountries = [
    ...new Set(citiesList?.map((city: CityType) => city.country)),
  ];

  return (
    <ul className={styles.list}>
      {allCountries.map((countryName: string) => (
        <Country
          countryObj={{
            flag: citiesList?.find(
              (city: CityType) => city.country === countryName
            )?.emoji,
            name: countryName,
          }}
          key={countryName}
        />
      ))}
    </ul>
  );
}

export default CountriesList;
