import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link to={"/"}>
        <div className={styles.imageContainer}>
          <img src={logo} className={styles.image} />
        </div>
      </Link>
      <ul className={styles.linkList}>
        <li className="link">
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li>
        <li className="link">
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li className={`${styles.login}`}>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
