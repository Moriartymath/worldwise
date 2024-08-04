import { useUser } from "../../contexts/LoginContext";
import styles from "./Logout.module.css";

function Logout() {
  const { user, setUser } = useUser();

  return (
    <div className={styles.container}>
      <h4 className={styles.name}>Welcome {user?.email}</h4>
      <button
        className={styles.button}
        onClick={() => {
          setUser(null);
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Logout;
