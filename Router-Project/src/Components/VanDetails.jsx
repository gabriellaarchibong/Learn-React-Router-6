import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import styles from "./VanDetail.module.css"
import arrowImage from "/src/assets/Arrow 1.png"

function VanDetails() {
    const [vanDetails, setVanDetails] = useState(null);
    // useLocation is used to get the current location of the url
    //for the user to be able to go back the selected van
    // we store store the url in the uselocation 
    // so that whenever the user clicks the back button is clicked the user can still view the van type selected 
    const location = useLocation()
    const para = useParams()
  
    useEffect(() => {
      fetch(`/api/vans/${para.id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans))
    }, [para.id]);

    const search = location.state?.search || "";
    const type = location.state?.type || "all"

  return (
    <div className= {styles.vanDetailPage}>
      <div className={styles.vanDetailPage2}> 
      <Link to= {`..${search}`} relative="path">
        <div className={styles.arrow}>
           <img src={arrowImage} alt="arrow-image" />  
           Back to {type} vans
        </div>
      </Link>
        {vanDetails ? (
            <div className={styles.vanInfo}>
            <div className={styles.vanImageContainer}>
                <img className={styles.vanImage} src={vanDetails.imageUrl} alt="product imge" />
            </div>
            <i className={styles.vanType}>{vanDetails.type}</i>
            <h1>{vanDetails.name}</h1>
            <p><strong>${vanDetails.price}</strong>/day</p>
            <p className={styles.vanInfo2}>{vanDetails.description}</p>
            <Link to="/" >
             <div className={styles.rentVanContainer}>
              <button className={styles.rentVan}>Rent this van</button>
             </div> 
            </Link>
        </div> 
        ) : (<div className={styles.vanDetailPage}>Loading...</div>)}
        
      </div> 
    </div>
  )
}

export default VanDetails