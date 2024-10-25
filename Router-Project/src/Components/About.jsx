import Styles from'./About.module.css'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className={Styles.about}>
      <div className={Styles.aboutPhoto}>
      </div>
      <div className={Styles.aboutText}>
        <h1 className={Styles.aboutHeaderText}>{`Don't squeeze in a sedan when you could relax in a van`}</h1>
        <p className={Styles.aboutpara}>{`Our mission is to enliven your road trip with the perfect van rental.Our travel vans are recertified before each trip
        to ensure your travel plans go off without a hitch (hitch cost extra 😊)`}</p>
        <p className={Styles.aboutpara}>{`Our team is full of vanlife enthusiasts wh know first hand the magic of touring the world on four wheels.`}</p>
      </div>
      <div className={Styles.aboutVanText}>
       <h2 className={Styles.vanExploreText}>Your destination is waiting. <br /> Your van is ready.</h2>
       <Link to="van" className={Styles.vanExploreBtn}>Explore our vans</Link>
      </div>
    </div>
  )
}

export default About