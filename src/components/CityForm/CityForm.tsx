import styles from "./CityForm.module.css";
import { Form, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { geocode } from "../../client/client";

async function reverseGeocode(position: { lat: string; lng: string }) {
  const res = await geocode.get("", {
    params: {
      apiKey: "38dccdb125874fdab0ceb7eb19f682ab",
      lat: position.lat,
      lon: position.lng,
      format: "json",
    },
  });

  return res.data;
}

function CityForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useQuery({
    queryFn: () =>
      reverseGeocode({
        lat: searchParams.get("lat")!,
        lng: searchParams.get("lng")!,
      }),
    queryKey: [searchParams.get("lat"), searchParams.get("lng")],
    staleTime: Infinity,
  });

  console.log(data);
  console.log("City form");
  return (
    <Form method="post" action="/app/cities" className={styles.form}>
      <div className={styles.container}>
        <p>City Name</p>
        <input defaultValue={1} name="city" />
      </div>
      <div className={styles.container}>
        <p>When did you go to Banyuls-dels-Aspres?</p>
        <input defaultValue={1} name="date" />
      </div>
      <div className={styles.container}>
        <p>Notes about your trip to Banyuls-dels-Aspres</p>
        <textarea name="note" className={styles.noteInput} />
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>

        <button>Ok</button>
      </div>
    </Form>
  );
}

export default CityForm;
