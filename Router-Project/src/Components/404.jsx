import styles from "./ErrorPage.module.css"
import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
    <div className={styles.errorContainer}>
        <div className={styles.heading}>
          <h1>Sorry, the page you were looking for was not found.</h1>
        </div>
        <Link to="/">
            <div className={styles.buttonContainer}>
                <button>Return to home</button>
            </div>
        </Link>
    </div>
  )
}

export default NotFoundPage