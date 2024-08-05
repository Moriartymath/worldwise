import styles from "./CityForm.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { geocode } from "../../client/client";
import { useReducer } from "react";
import { useCities } from "../../contexts/CitiesContext";

type stateType = {
  date: string;
  note: string;
};

type ActionType = {
  type: Actions;
  payload: string;
};

async function reverseGeocode(position: { lat: number; lng: number }) {
  const res = await geocode.get("", {
    params: {
      apiKey: "38dccdb125874fdab0ceb7eb19f682ab",
      lat: position.lat,
      lon: position.lng,
      format: "json",
    },
  });

  return res?.data?.results?.[0];
}

const formater = Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

enum Actions {
  setDate = "setDate",
  setNote = "setNote",
}

function reducer(state: stateType, action: ActionType): stateType {
  switch (action.type) {
    case Actions.setDate:
      return { ...state, date: action.payload };
    case Actions.setNote:
      return { ...state, note: action.payload };
    default:
      return state;
  }
}
const initialState = { date: formater.format(new Date()), note: "" };

function CityForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lat = +searchParams.get("lat")!;
  const lng = +searchParams.get("lng")!;
  const { addCityMutation } = useCities();
  const [tripDetails, dispatch] = useReducer(reducer, initialState);
  const { data: cityInfo, isLoading } = useQuery({
    queryFn: () =>
      reverseGeocode({
        lat,
        lng,
      }),
    queryKey: [lat, lng],
    staleTime: Infinity,
  });

  const formatedDate = tripDetails.date.split("/").reverse().join("-");

  if (isLoading) return <h1>fetching</h1>;

  return (
    <form
      className={styles.form}
      onSubmit={(ev) => {
        ev.preventDefault();

        addCityMutation({
          cityName: cityInfo.city,

          country: cityInfo.country,
          emoji: cityInfo.country_code,
          date: tripDetails.date,
          notes: tripDetails.note,
          position: {
            lat,
            lng,
          },
          id: String(Date.now()),
        });

        navigate("/app/cities");
      }}
    >
      <div className={styles.container}>
        <p>City name</p>
        <input defaultValue={cityInfo.city} name="city" />
      </div>
      <div className={styles.container}>
        <p>When did you go to {cityInfo.city}?</p>
        <input
          value={formatedDate}
          type="date"
          onChange={(ev) =>
            dispatch({
              type: Actions.setDate,
              payload: formater.format(ev.target.valueAsDate!),
            })
          }
          name="date"
        />
      </div>
      <div className={styles.container}>
        <p>Notes about your trip to {cityInfo.city}</p>
        <textarea
          name="note"
          className={styles.noteInput}
          value={tripDetails.note}
          onChange={(ev) => {
            dispatch({
              type: Actions.setNote,
              payload: ev.target.value,
            });
          }}
        />
      </div>
      <div>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </button>

        <button>Ok</button>
      </div>
    </form>
  );
}

export default CityForm;
