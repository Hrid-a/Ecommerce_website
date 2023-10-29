import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "sonner";
import { removeProduct } from "../../redux/features/Product/productSlice";

const ProductActions = ({ params }) => {

    const { isSuccess, message, error, loading } = useSelector(state => state.product);
    const dispatch = useDispatch();

    const handleDelete = (id) => {

        dispatch(removeProduct(id));
    }

    if (isSuccess) {
        toast.success(message);
    } else if (error) {
        toast.error(error);
    }
    return (


        <div className="action">
            <Link to={"/admin/product/" + params.id} className='link'>
                <FaEdit />
            </Link>

            <span onClick={() => handleDelete(params?.id)}>
                {loading ? <FaSpinner /> : <FaTrash />}
            </span>
        </div>

    )
}

export default ProductActions;