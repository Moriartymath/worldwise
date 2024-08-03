import { client } from "../../../../client/client";
import styles from "./CityPreview.module.css";
import LabeledText from "./LabeledText/LabeledText";
import { Await, Link, defer, useLoaderData, useParams } from "react-router-dom";
import React from "react";
import { AxiosResponse } from "axios";
import { CityType } from "../../../../types/types";
import { useQuery } from "react-query";
import { getCity } from "../../../../contexts/CitiesContext";

/*export function loader({ params }: { params: { id: string } }) {
  return defer({ res: client.get(`cities/${params.id}`) });
}*/

function CityPreview() {
  //const { res } = useLoaderData() as { res: AxiosResponse<CityType[]> };
  const params = useParams() as { id: string };

  const { data: cityObj, isLoading } = useQuery({
    queryFn: () => getCity(params.id),
    queryKey: ["cities", params.id],
    staleTime: Infinity,
  });

  console.log(cityObj, isLoading);

  if (isLoading) return <h1>Loading...</h1>;

  const textList = [
    { label: "City Name", childrens: <h3>{cityObj.cityName}</h3> },
    {
      label: `You went to ${cityObj.cityName} on`,
      childrens: <h3>{new Date(cityObj.date).toLocaleDateString()}</h3>,
    },
    { label: "Your note", childrens: <h3>{cityObj.notes}</h3> },
    {
      label: "Learn More",
      childrens: (
        <h3>
          <a href={`https://en.wikipedia.org/wiki/${cityObj.cityName}`}>
            {`Check out ${cityObj.cityName} on Wikipedia`} <span>&rarr;</span>
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
