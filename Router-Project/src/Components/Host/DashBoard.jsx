import { Await, defer, Link, useLoaderData } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { FaStar } from "react-icons/fa6";
import { authenticate } from "../auth";
import { getHostvans } from "../useApi";
import { Suspense } from "react";
export async function loader({request}) {
  await authenticate(request);
  return defer({ hostvans: getHostvans() });
}
function DashBoard() {
  const hostVansData = useLoaderData();
  function vanDetails(vans) {
    const vansElement = vans.map((vans) => (
      <div key={vans.id} className={styles.vandetails}>
        <div className={styles.imageDetails}>
          <div className={styles.imageCon}>
            <img
              className={styles.image}
              src={vans.imageUrl}
              alt={vans.name}
            />
          </div>
          <div className={styles.imagetextCont}>
            <p className={styles.vanname}>{vans.name}</p>
            <p className={styles.vanDetail}>{vans.price} /day</p>
          </div>
        </div>
        <div className={styles.linkCont}>
          <Link>edit</Link>
        </div>
      </div>
    ));
    return vansElement
  }
  return (
    <section className={styles.dashboard}>
      <div className={styles.con1}>
        <div className={styles.dashboardTextcon}>
          <h1>Welcome</h1>
          <div className={styles.link}>
            <p>
              Income last <span>30 days</span>
            </p>
            <Link to="review">Review</Link>
          </div>
          <h2>$2,330</h2>
        </div>
        <div className={styles.dashboardTextcon2}>
          <div className={styles.reviewText}>
            <p style={{ fontWeight: "bold" }}>Review score</p>
            <p className={styles.reviewstarcon}>
              <FaStar className={styles.star} />
              <strong>5.0</strong>
              <span>/5</span>
            </p>
          </div>
          <Link to="income">details</Link>
        </div>
      </div>
      <div className={styles.con2}>
        <div className={styles.heading}>
          <h3>Your listed vans</h3>
          <Link to="vans">View all</Link>
        </div>
        <Suspense fallback = {<h1>Loading...</h1>}>
        <Await resolve={hostVansData.hostvans}>
           {vanDetails}
        </Await>
        </Suspense>
      </div>
    </section>
  );
}

export default DashBoard;
