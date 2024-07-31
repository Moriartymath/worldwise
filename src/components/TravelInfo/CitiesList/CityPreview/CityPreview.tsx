import { CityType } from "../../../../types/types";
import styles from "./CityPreview.module.css";
import LabeledText from "./LabeledText/LabeledText";

type CityPreviewProps = {
  cityObj: CityType;
  setSelectedCityId: Function;
};

function CityPreview({ cityObj, setSelectedCityId }: CityPreviewProps) {
  const textList = [
    { label: "City Name", childrens: <h3>{cityObj.city}</h3> },
    {
      label: `You went to ${cityObj.city} on`,
      childrens: <h3>{cityObj.lastVisited}</h3>,
    },
    {
      label: "Learn More",
      childrens: (
        <h3>
          <a href={`https://en.wikipedia.org/wiki/${cityObj.city}`}>
            {`Check out ${cityObj.city} on Wikipedia`} <span>&rarr;</span>
          </a>
        </h3>
      ),
    },
  ];

  return (
    <div className={styles.cityContainer}>
      {textList.map(({ label, childrens }) => (
        <LabeledText label={label}>{childrens}</LabeledText>
      ))}
      <button
        onClick={() => {
          console.log("back");
          setSelectedCityId(null);
        }}
      >
        <span>&larr;</span> Back
      </button>
    </div>
  );
}

export default CityPreview;
