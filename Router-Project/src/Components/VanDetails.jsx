import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from "./VanDetail.module.css"
import arrowImage from "/src/assets/Arrow 1.png"

function VanDetails() {
    const [vanDetails, setVanDetails] = useState(null);
    const para = useParams()
    // console.log(para)
    useEffect(() => {
      fetch(`/api/vans/${para.id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans))
    }, [para.id]);

  return (
    <div className= {styles.vanDetailPage}>
      <div className={styles.vanDetailPage2}>
        
      <Link to= "/vans">
        <div className={styles.arrow}>
           <img src={arrowImage} alt="arrow-image" />  
           Back to van page
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