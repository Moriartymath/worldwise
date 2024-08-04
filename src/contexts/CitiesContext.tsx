import { createContext, useContext, useState } from "react";
import React from "react";
import { CityType } from "../types/types";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import axios from "axios";
import { client } from "../client/client";

type CitiesProviderProps = {
  children: any;
};

const CitiesContext = createContext(null) as React.Context<null | {
  citiesList: CityType[] | undefined;
  addCityMutation: (cityObj: CityType) => Promise<void>;
  deleteCityMutation: (id: string) => Promise<void>;
  isLoading: boolean;
  selectedCityPosition: number[];
  setSelectedCityPosition: Function;
}>;

async function getCities() {
  const res = await client.get("cities");
  return res.data as CityType[];
}

async function addCity(cityObj: CityType) {
  await client.post("cities", cityObj);
}

export async function getCity(id: string) {
  const res = await client.get(`cities/${id}`);
  return res.data;
}

async function deleteCity(id: string) {
  await client.delete(`cities/${id}`);
}
function CitiesProvider({ children }: CitiesProviderProps) {
  const queryClient = useQueryClient();

  const { data: citiesList, isLoading } = useQuery({
    queryFn: getCities,
    queryKey: ["cities"],
  }) as { data: CityType[] | undefined; isLoading: boolean };

  const { mutateAsync: addCityMutation } = useMutation({
    mutationFn: addCity,
    onSuccess: () => {
      queryClient.invalidateQueries("cities");
    },
  });

  const { mutateAsync: deleteCityMutation } = useMutation({
    mutationFn: deleteCity,
    onSuccess() {
      console.log("deleting");
      queryClient.invalidateQueries("cities");
    },
  });

  const [selectedCityPosition, setSelectedCityPosition] = useState([]);

  console.log(citiesList, isLoading);
  return (
    <CitiesContext.Provider
      value={{
        citiesList,
        addCityMutation,
        isLoading,
        selectedCityPosition,
        setSelectedCityPosition,
        deleteCityMutation,
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
