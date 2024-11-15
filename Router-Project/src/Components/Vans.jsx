// import { useEffect, useState } from "react";
import styles from "./Vans.module.css";
import { Await, defer, Link, useLoaderData, useSearchParams } from "react-router-dom";
// import server from 'server.js'
import { getVans } from "./useApi";
import { Suspense } from "react";
// import { authenticate } from "./auth";

export async function loader() {
  return defer({vans: getVans()}) ;
}
function Vans() {
  // const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  const typeFilter = searchParams.get("type");

  const vansPromise = useLoaderData();
  // useLoaderData() is used to fetch data in data layer api
  // no need of a useEffect as the useLoaderData() runs before the component mounts
  console.log(vansPromise.vans)

  const buttonsBackgroundColor = ({ type }) => {
    if (type === "simple") return styles.simple;
    if (type === "rugged") return styles.rugged;
    if (type === "luxury") return styles.luxury;
    return styles.productBtns;
  };

  function handleFilterChange(key, value) {
    setSearchParams((prevSearchParams) => {
      if (value === null) {
        prevSearchParams.delete(key);
      } else {
        prevSearchParams.set(key, value);
      }
      return prevSearchParams;
    });
  }
  //  if(loading){
  //   return <h1 aria-live="polite">Loading...</h1>
  //  }
  //  if(error){
  //   return <h1 aria-live="assertive">There was an error: {error.message}</h1>
  //  }

  return (
    <div className={styles.vanPage}>
      <div className={styles.vanPageHeader}>
        <h3 className={styles.vanPageHeaderText}>Explore Our van Options</h3>
      </div>
      <Suspense fallback = {<h1>loading...</h1>}>
      <Await resolve={vansPromise.vans}>
        {(vans) => {
          const displayedTypeContent = typeFilter
            ? vans.filter((char) => char.type === typeFilter)
            : vans;
          return (
            <>
              <div className={styles.vanPageLinksContainer1}>
                <nav className={styles.vanPageLinksContainer2}>
                  <button
                    className={`${styles.vanPageLinks} ${
                      typeFilter === "simple" ? styles.simple : ""
                    } `}
                    onClick={() => handleFilterChange("type", "simple")}
                  >
                    simple
                  </button>
                  <button
                    className={`${styles.vanPageLinks} ${
                      typeFilter === "rugged" ? styles.rugged : ""
                    } `}
                    onClick={() => handleFilterChange("type", "rugged")}
                  >
                    rugged
                  </button>
                  <button
                    className={`${styles.vanPageLinks} ${
                      typeFilter === "luxury" ? styles.luxury : ""
                    } `}
                    onClick={() => handleFilterChange("type", "luxury")}
                  >
                    luxury
                  </button>
                  {typeFilter ? (
                    <button
                      className={`${styles.vanPageLinks} ${styles.clearFilter}`}
                      onClick={() => handleFilterChange("type", null)}
                    >
                      clear filter
                    </button>
                  ) : null}
                </nav>
              </div>
              <div className={styles.productDisplayContainer}>
                <div className={styles.productDisplayContainer2}>
                  {displayedTypeContent.map(
                    ({ id, name, imageUrl, price, type }) => (
                      <div key={id} className={styles.container}>
                        <Link
                          to={id}
                          state={{
                            search: `?${searchParams.toString()}`,
                            type: typeFilter,
                          }}
                          aria-label={`view details for ${name} price at $${price} per day`}
                        >
                          <img
                            className={styles.productImage}
                            src={imageUrl}
                            alt="van-image"
                          />
                          <div className={styles.productDetails}>
                            <p className={styles.vanName}>{name}</p>
                            <p>
                              ${price}
                              <span>/day</span>
                            </p>
                          </div>
                          <i
                            className={`${styles.productBtns} ${
                              styles.selected
                            } ${buttonsBackgroundColor(type)}`}
                          >
                            {type}
                          </i>
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          );
        }}
      </Await>
      </Suspense>
    </div>
  );
}

export default Vans;
