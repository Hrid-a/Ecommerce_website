import { FaStar, FaRegStar } from "react-icons/fa";
import AddReview from "./AddReview";
const Reviews = ({ reviews, id }) => {
    return (
        <>
            <section className="title-container">
                <h2 className="title">Reviews</h2>
                <p>see what other poeple say about our products</p>
            </section>
            <div className="reviews">
                <AddReview id={id} />
                {reviews && reviews.map((review) => (<div key={review._id}>
                    <section>
                        <span className="reviews__heading">{review.name}</span>

                        <p className="reviews__rating">
                            <span className="reviews__rating">{review.rating}</span>
                            {[1, 2, 3, 4, 5].map((item) => <span key={item}>{item <= Number(review.rating) ?
                                <FaStar className="filled" /> : <FaRegStar className="outlined" />} </span>)}
                        </p>
                    </section>
                    <p className="reviews__comment">{review.comment}</p>
                </div>))}
            </div>
        </>
    )
}

export default Reviews