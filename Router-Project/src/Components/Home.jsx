import styles from "./Home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.mainContainerItems}>
            <h1 className={styles.header}>You got the travel plans, we got the travel vans</h1>
            <p className={styles.para}>
              Add adventure to your life by joining the #vanlife movement.
              Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="vans" className={styles.btn}>Find your van</Link>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default Home;
