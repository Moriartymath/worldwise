import styles from "./CityForm.module.css";
import { Link, useNavigate } from "react-router-dom";
function CityForm() {
  const navigate = useNavigate();

  return (
    <form
      className={styles.form}
      onSubmit={(ev) => {
        ev.preventDefault();
      }}
    >
      <div className={styles.container}>
        <p>City Name</p>
        <input />
      </div>
      <div className={styles.container}>
        <p>When did you go to Banyuls-dels-Aspres?</p>
        <input />
      </div>
      <div className={styles.container}>
        <p>Notes about your trip to Banyuls-dels-Aspres</p>
        <textarea className={styles.noteInput} />
      </div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>

        <Link to="../cities">
          <button>Ok</button>
        </Link>
      </div>
    </form>
  );
}

export default CityForm;
