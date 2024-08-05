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
      {!pathname.includes("app") ? (
        <>
          <header>
            <NavBar />
          </header>
          <main className={styles.main}>
            <Outlet />
          </main>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Layout;
