import React, { createContext } from "react";
import { CityType } from "../types/types";

const contextObj = [] as CityType[];

export const CitiesContext = createContext(contextObj) as React.Context<
  CityType[]
>;
