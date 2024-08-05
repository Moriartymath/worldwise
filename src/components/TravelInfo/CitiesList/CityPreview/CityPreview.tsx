import styles from "./CityPreview.module.css";
import LabeledText from "./LabeledText/LabeledText";
import { Link, useParams } from "react-router-dom";
import { CityType } from "../../../../types/types";
import { useQuery } from "react-query";
import { getCity, useCities } from "../../../../contexts/CitiesContext";

function CityPreview() {
  const params = useParams() as { id: string };
  const { setSelectedCityPosition } = useCities();

  const { data: cityObj, isLoading } = useQuery({
    queryFn: () => getCity(params.id),
    queryKey: ["cities", params.id],
    staleTime: Infinity,
    onSuccess(data) {
      setSelectedCityPosition([data?.position.lat, data?.position.lng]);
    },
  }) as { data: CityType | undefined; isLoading: boolean };

  console.log(cityObj, isLoading);

  if (isLoading) return <h1>Loading...</h1>;

  const textList = [
    { label: "City Name", childrens: <h3>{cityObj?.cityName}</h3> },
    {
      label: `You went to ${cityObj?.cityName} on`,
      childrens: <h3>{new Date(cityObj?.date || "").toLocaleDateString()}</h3>,
    },
    { label: "Your note", childrens: <h3>{cityObj?.notes}</h3> },
    {
      label: "Learn More",
      childrens: (
        <h3>
          <a href={`https://en.wikipedia.org/wiki/${cityObj?.cityName}`}>
            {`Check out ${cityObj?.cityName} on Wikipedia`} <span>&rarr;</span>
          </a>
        </h3>
      ),
    },
  ];

  return (
    <div className={styles.cityContainer}>
      {textList.map(({ label, childrens }, index) => (
        <LabeledText label={label} key={index}>
          {childrens}
        </LabeledText>
      ))}
      <Link to="../cities">
        <button className={styles.backButton}>
          <span>&larr;</span> Back
        </button>
      </Link>
    </div>
  );
}

export default CityPreview;
