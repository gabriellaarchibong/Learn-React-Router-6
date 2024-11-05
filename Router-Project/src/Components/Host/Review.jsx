import styles from "./Review.module.css"
import reviewImage from "/src/assets/Group 305.png"
import { FaStar } from "react-icons/fa6"

function Review() {
  const reviewsData = [
    {
        rating: 5,
        name: "Elliot",
        date: "January 3, 2023",
        text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
        id: "1",
    },
    {
        rating: 5,
        name: "Sandy",
        date: "December 12, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
        id: "2",
    },
]
  return (
    <section className={styles.review}>
      <div className ={styles.imageCont}>
        <img className ={styles.image} src={reviewImage} alt="review-img" />
      </div>
      {reviewsData.map(data => (
        <div className ={styles.infoCont} key={data.id}>
          <div>
            {[...Array(data.rating)].map((_, i) => (
              <FaStar key={i} className= {styles.star} />
            ))}
          </div>
          
          <p><strong>{data.name}</strong>  {data.data}</p>
          <p>{data.text}</p>
        </div>
      ))}
    </section>
  )
}

export default Review