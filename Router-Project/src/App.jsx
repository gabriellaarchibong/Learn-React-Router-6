import {BrowserRouter,Routes, Route, Link} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";
import styles from './Components/App.module.css';
function App() {
  return (
    <>
    <BrowserRouter>
     <nav className={styles.navigator}>
        <Link to="/" className={styles.vanlife}>
          #Vanlife
        </Link>
        <div className={styles.navigator2}>
          <Link to="/about" className={styles.home}>
            About
          </Link>
          <Link to="/vans" className={styles.vans}>
            Vans
          </Link>
        </div>
      </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element = {<About />} />
      <Route path = "/vans" element = {<Vans />} />
    </Routes>
    <footer className={styles.footer}>
        <p className={styles.footerText}>&copy; 2024 #vanlife</p>
    </footer>
    </BrowserRouter>

    </>
  )
}

export default App
