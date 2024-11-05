
import styles from "./Income.module.css"
import graphImage  from "/src/assets/Group 312.png"
function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
]
  return (
    <section className={styles.incomeCont}>
      <div className={styles.incomeText}>
        <h1>Income</h1>
        <p>last <span>30 days</span></p>
        <h2>$2,260</h2>
      </div>
      <div className={styles.graphCont}>
        <img className={styles.graphImage} src={graphImage} alt="graph-image" />
      </div>
      <div className={styles.infoCont}>
        <div className={styles.yourTransaction}>
          <p className={styles.transHeader}>Your transactions(3)</p>
          <p className={styles.transHeader2}>last <span style={{textDecoration: "underline"}}>30 days</span></p>
        </div>
        {transactionsData.map(trans => (
          <div key={trans.id} className={styles.infoCont2}>
            <p className={styles.incomePrice}>${trans.amount}</p>
            <p>{trans.date}</p> 
          </div>
        ))}
      </div>
    </section>
  )
}

export default Income