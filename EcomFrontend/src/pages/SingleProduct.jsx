import useSingleProduct from "../hooks/useSingleProduct";
import SingleCard from "../components/Products/SingleCard";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { productId } = useParams();
    const product = useSingleProduct(productId);

    return (
        <div>
            <section className="title-container">
                <h2 className="title">Shop Now</h2>
                <p>it is quick and easy</p>
            </section>
            <section>
                <SingleCard product={product} />
            </section>
        </div>
    )
}

export default SingleProduct