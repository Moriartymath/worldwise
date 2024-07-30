import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>You travel the world</h1>
        <h1 className={styles.title}>
          WorldWise keeps track of your adventures.
        </h1>
      </div>
      <h4 className={styles.text}>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h4>
      <Link to="/login">
        <button className={styles.redirectButton}>Start tracking now</button>
      </Link>
    </div>
  );
}

export default Home;
