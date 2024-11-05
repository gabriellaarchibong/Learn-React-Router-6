// import { useEffect, useState } from "react"
import styles from "./ListedVans.module.css"
import { Await, defer, Link, useLoaderData } from "react-router-dom"
import { getHostvans } from "../useApi"
import { authenticate } from "../auth"
import { Suspense } from "react"

export async function loader ({request}) {
  await authenticate(request)
  return defer({ hostVans: getHostvans()})
}

function ListedVans() {
    // const [listedVans, setListedVans] = useState([])
    const listedVans = useLoaderData()
    console.log(listedVans)

    function renderVansElement (vansPromise) {
      const vansElement =  vansPromise.map((vans) => (

        <div key={vans.id}>
        <Link to={vans.id}>
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
        ))
        return (
          vansElement
        )
    }
  return (
    <section className={styles.listedVansContainer}>
      <div className={styles.heading}>
        <p className={styles.headingText}>Your Listed Vans</p>
      </div>
      <Suspense fallback = {<h1>loading...</h1>}>
        <Await resolve={listedVans.hostVans}>
          {renderVansElement}
        </Await>
       </Suspense>
    </section>
  )
}

export default ListedVans