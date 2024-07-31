import useLocalStorage from "../../../hooks/useLocalStorage";
import City from "./City/City";
import { CityType } from "../../../types/types";
import styles from "./CitiesList.module.css";
import { useState } from "react";
import CityPreview from "./CityPreview/CityPreview";

type CitiesListType = Array<CityType>;

const temp = {
  country: "Ukraine",
  city: "Kyiv",
  lastVisited: new Date().toLocaleDateString(),
  notes: "Amazing",
  id: "712345",
};

function CitiesList() {
  const [citiesList, setCitiesList] = useLocalStorage("cities") as [
    CitiesListType,
    Function
  ];
  const [selectedCityId, setSelectedCityId] = useState(null);

  if (selectedCityId !== null) {
    return (
      <CityPreview
        setSelectedCityId={setSelectedCityId}
        cityObj={citiesList.find((city) => city.id === selectedCityId)!}
      />
    );
  }
  return (
    <ul className={styles.cityList}>
      {citiesList.map((city, index) => (
        <City
          cityObj={city}
          key={index}
          setSelectedCityId={setSelectedCityId}
        />
      ))}
    </ul>
  );
}

export default CitiesList;
