import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css"
import userCircle from "/src/assets/User circle.png"
function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  return (
    <header className={styles.header}>
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
          <Link to="/login" className={styles.vans}>
            <img src={userCircle} alt="user-circle" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
