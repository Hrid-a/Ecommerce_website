import ResponsiveDialog from "../ui/ResponsiveDialog";
import { Toaster, toast } from "sonner";
import { reviewSchema } from "../../utils/auth";
import Textarea from "../Forms/Textarea";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useDispatch, useSelector } from "react-redux";
import { addReview, handleReviewError } from "../../redux/features/Product/reviewsSlice";
import Button from "../Button";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

const AddReview = ({ id }) => {
    const { error, message, isSuccess, loading } = useSelector(state => state.review);

    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(reviewSchema),
        defaultValues: {
            comment: "",
        }
    })

    const [rating, setRating] = useState(0);
    const dispatch = useDispatch()

    if (isSuccess) {
        toast.success(message);
    } else if (error) {
        toast.error(error);
    }

    const addReviews = async (data) => {
        const reviewData = { comment: data.comment, productId: id, rating }
        dispatch(addReview(reviewData));

    }

    // Change this to review
    const errors = Object.values(formState.errors);
    if (errors.length) {
        dispatch(handleReviewError(errors[0].message));
    } else {
        dispatch(handleReviewError(""));
    }



    return (
        <>
            <ResponsiveDialog title="Add a Review" >
                <Toaster richColors position="top-center" />
                <form onSubmit={handleSubmit(addReviews)}>
                    <p className="reviews__rating">
                        {[1, 2, 3, 4, 5].map((item, index) => <span key={item}>{item <= Number(rating) ?
                            <FaStar className="filled" onClick={() => setRating(index)} /> : <FaRegStar className="outlined" onClick={() => setRating(item)} />} </span>)}
                    </p>
                    <Textarea register={register} label="comment" />
                    <Button className="btn btn-primary" text="add" loading={loading} />
                </form>
            </ResponsiveDialog>
        </>
    )
}

export default AddReview;