import { client } from "../../../../client/client";
import styles from "./CityPreview.module.css";
import LabeledText from "./LabeledText/LabeledText";
import { Await, Link, defer, useLoaderData, useParams } from "react-router-dom";
import React from "react";
import { AxiosResponse } from "axios";
import { CityType } from "../../../../types/types";

export function loader({ params }: { params: {} }) {
  return defer({ res: client.get("cities") });
}

function CityPreview() {
  const { res } = useLoaderData() as { res: AxiosResponse<CityType[]> };
  const params = useParams();

  return (
    <div className={styles.cityContainer}>
      {
        <React.Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={res}>
            {(res) => {
              const data = res.data as CityType[];
              const cityObj = data.find(
                (city: CityType) => String(city.id) === params.cityId
              )!;
              const textList = [
                { label: "City Name", childrens: <h3>{cityObj.cityName}</h3> },
                {
                  label: `You went to ${cityObj.cityName} on`,
                  childrens: (
                    <h3>{new Date(cityObj.date).toLocaleDateString()}</h3>
                  ),
                },
                { label: "Your note", childrens: <h3>{cityObj.notes}</h3> },
                {
                  label: "Learn More",
                  childrens: (
                    <h3>
                      <a
                        href={`https://en.wikipedia.org/wiki/${cityObj.cityName}`}
                      >
                        {`Check out ${cityObj.cityName} on Wikipedia`}{" "}
                        <span>&rarr;</span>
                      </a>
                    </h3>
                  ),
                },
              ];
              return (
                <>
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
                </>
              );
            }}
          </Await>
        </React.Suspense>
      }
    </div>
  );
}

export default CityPreview;
