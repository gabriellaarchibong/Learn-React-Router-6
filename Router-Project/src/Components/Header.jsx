import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css"
function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  return (
    <header>
      <nav className={styles.navigator}>
        <Link to="/" className={styles.vanlife}>
          #Vanlife
        </Link>
        <div className={styles.navigator2}>
            <NavLink to="/host" className={styles.home} style={({isActive}) => isActive ? activeStyles : null}>
             Host
            </NavLink>
          <NavLink to="/about" className={styles.home} style={({isActive}) => isActive ? activeStyles : null}>
            About
          </NavLink>
          <NavLink to="/vans" className={styles.vans} style={({isActive}) => isActive ? activeStyles : null}>
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
