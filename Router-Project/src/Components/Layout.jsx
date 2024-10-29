import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import Header from "./Header"
import Footer from "./Footer"
function Layout() {
  return (
    <div className={styles.siteWrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout