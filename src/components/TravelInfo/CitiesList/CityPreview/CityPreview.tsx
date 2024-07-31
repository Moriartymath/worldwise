import { CityType } from "../../../../types/types";
import styles from "./CityPreview.module.css";
import LabeledText from "./LabeledText/LabeledText";

type CityPreviewProps = {
  cityObj: CityType;
  setSelectedCityId: Function;
};

function CityPreview({ cityObj, setSelectedCityId }: CityPreviewProps) {
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
