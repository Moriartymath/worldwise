import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.imageContainer}>
        <img src={logo} className={styles.image} />
      </div>

      <ul className={styles.linkList}>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
