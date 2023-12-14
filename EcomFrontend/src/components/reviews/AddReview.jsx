import ResponsiveDialog from "../ui/ResponsiveDialog";
import { Toaster, toast } from "sonner";
import { reviewSchema } from "../../utils/auth";
import Textarea from "../Forms/Textarea";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/features/Product/reviewsSlice";
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
        toast.error(errors[0].message);
    }



    return (
        <>
            <ResponsiveDialog title="Add a Review" >
                <Toaster richColors position="top-center" />
                <form onSubmit={handleSubmit(addReviews)}>
                    <p className="reviews__rating">
                        {[...Array(5)].map((item, index) => <span key={index + 1}>{index + 1 <= Number(rating) ?
                            <FaStar className="filled" onClick={() => setRating(index)} /> : <FaRegStar className="outlined" onClick={() => setRating(index + 1)} />} </span>)}
                    </p>
                    <Textarea register={register} label="comment" />
                    <Button className="btn btn-primary" text="add" loading={loading} />
                </form>
            </ResponsiveDialog>
        </>
    )
}

export default AddReview;