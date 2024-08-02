import { createContext, useContext, useState } from "react";
import React from "react";
import { CityType } from "../types/types";

type CitiesProviderProps = {
  children: any;
  res: CityType[];
};

const CitiesContext = createContext(null) as React.Context<null | {
  citiesList: CityType[];
  setCitiesList: Function;
}>;

function CitiesProvider({ children, res }: CitiesProviderProps) {
  const [citiesList, setCitiesList] = useState(res);

  //useEffect(() => {}, [citiesList, setCitiesList]);

  return (
    <CitiesContext.Provider
      value={{
        citiesList,
        setCitiesList,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error("Cities context should be used with CitiesProvider!");
  return context;
}

export { CitiesProvider, useCities };
