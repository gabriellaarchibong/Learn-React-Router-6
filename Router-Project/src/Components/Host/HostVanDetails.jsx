// import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData} from "react-router-dom";
import styles from "./HostVanDetail.module.css";
import backArrow from "/src/assets/Arrow 1.png";
import { getVanId } from "../useApi";
 import { authenticate } from "../auth";
export async function loader ({params, request}) {
  await authenticate(request)
  return getVanId(params.id)
}

function HostVanDetails() {
  const vanId = useLoaderData()
  // const [vanId, setVanId] = useState(null);
  // const params = useParams();
  // console.log(params)
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  // useEffect(() => {
  //   fetch(`/api/host/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVanId(data.vans));
  // }, [params.id]);
  return (
    <>
      <div className={styles.container}>
        <Link to=".." relative="path">
          <div className={styles.backArrowContainer}>
            <img src={backArrow} alt="back-arrow" />
            Back to all vans
          </div>
        </Link>
        {vanId ? (
          <div className={styles.infoContainer}>
                <div className={styles.infoContainer2}>
                <div className={styles.imageContainer}>
                    <img
                    className={styles.image}
                    src={vanId.imageUrl}
                    alt={vanId.name}
                    />
                </div>
                <div className={styles.infoBox}>
                    <i className={styles.vanType}>{vanId.type}</i>
                    <p className={styles.vanName}>{vanId.name}</p>
                    <p className={styles.vanPrice}>
                    <strong>{vanId.price}</strong>/day
                    </p>
                </div>
                </div>
                <div className={styles.navContainer}>
                    <nav className={styles.nav}>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to="." end>Details</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to ="pricing">Pricing</NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyles : null} to="photo">Photo</NavLink>
                    </nav>
                </div>
            <Outlet context={{vanId}} />
          </div>
        ) : (
          <div className={styles.infoContainer2}>Loading...</div>
        )}
      </div>
    </>
  );
}

export default HostVanDetails;
