import styles from "./HostNav.module.css";
import { NavLink, Outlet } from "react-router-dom";
function HostNav() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <div className={styles.hostNavContainer}>
        <nav className={styles.hostNav}>
          <NavLink
            end
            className={styles.hostNavLinks}
            to="."
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Dashboard
          </NavLink>
          <NavLink
            className={styles.hostNavLinks}
            to="income"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Income
          </NavLink>
          <NavLink
            className={styles.hostNavLinks}
            to="vans"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
          <NavLink
            className={styles.hostNavLinks}
            to="review"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Review
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default HostNav;
