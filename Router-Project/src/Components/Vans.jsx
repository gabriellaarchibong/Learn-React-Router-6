import { useEffect, useState } from "react";
import styles from "./Vans.module.css";
import { Link } from "react-router-dom";
// import server from 'server.js'
function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((err) => console.log(err));
  }, []);
// console.log(vans)
  return (
    <div className={styles.vanPage}>
      <div className={styles.vanPageHeader}>
        <h3 className={styles.vanPageHeaderText}>Explore Our van Options</h3>
      </div>
      <div className={styles.vanPageLinksContainer1}>
        <nav className={styles.vanPageLinksContainer2}>
          <Link to="/one" className={styles.vanPageLinks}>
            one
          </Link>
          <Link to="two" className={styles.vanPageLinks}>
            two
          </Link>
          <Link to="three" className={styles.vanPageLinks}>
            Three
          </Link>
          <Link to="four" className={styles.vanPageLinks}>
            Four
          </Link>
        </nav>
      </div>
      <div className={styles.productDisplayContainer}>
        <div className={styles.productDisplayContainer2}>
          {vans.map(({id, name, imageUrl, price, type}) => (
            <div key={id} className={styles.container}>
                <img className={styles.productImage} src={imageUrl} alt="van-image" />
                <div className={styles.productDetails}>
                    <h3>{name}</h3>
                    <p>${price}<span>/day</span></p>
                </div>
                <i className={`${styles.productBtns} ${styles.selected} ${type}`}>{type}</i>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Vans;
