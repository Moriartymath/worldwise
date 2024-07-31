type CityType = {
  country: string;
  city: string;
  lastVisited: string;
  notes: string;
  id: string;
  wikiURL: string;
};

type CountryType = {
  flag?: string;
  name: string;
};
export type { CityType, CountryType };
