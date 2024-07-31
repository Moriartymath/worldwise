type CityType = {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id: number;
};

type CountryType = {
  flag?: string;
  name: string;
};
export type { CityType, CountryType };
