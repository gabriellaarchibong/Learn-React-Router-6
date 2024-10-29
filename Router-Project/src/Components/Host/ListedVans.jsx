import { useEffect, useState } from "react"
import styles from "./ListedVans.module.css"
import { Link } from "react-router-dom"

function ListedVans() {
    const [listedVans, setListedVans] = useState([])
    useEffect(() => {
     fetch("/api/host/vans")
     .then(res => res.json())
     .then(data => setListedVans(data.vans) )
    }, [])
  return (
    <section className={styles.listedVansContainer}>
      <div className={styles.heading}>
        <p className={styles.headingText}>Your Listed Vans</p>
      </div>
      {listedVans.map((vans) => (

        <div key={vans.id}>
        <Link to={`/host/vans/${vans.id}`}>
            <div className={styles.infobox}>
                <div className={styles.imageBox}>
                 <img className={styles.image} src={vans.imageUrl} alt="" />
                </div>
                <div className={styles.discription}>
                    <p className={styles.vanName}>{vans.name}</p>
                    <p className={styles.price}><strong>{vans.price}</strong>/day</p>
                </div>
            </div>
            </Link>
          </div>
            
        ))}
      
    </section>
  )
}

export default ListedVans