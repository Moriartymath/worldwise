import { Outlet, useLocation } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./Layout.module.css";

function Layout() {
  const { pathname } = useLocation();

  return (
    <div
      className={`${styles.default} ${
        pathname === "/" ? styles.imageContainer : ""
      }`}
    >
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
