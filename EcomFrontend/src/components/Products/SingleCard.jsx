import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/Product/cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import Reviews from "../reviews/Reviews";

const SingleCard = ({ product: { _id, description, name, category, images, price, reviews } }) => {

    const [quantity, setQuantity] = useState(1);
    const [selectedImg, setSelectedImg] = useState(2);
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addToCart(
            {
                id: _id,
                name,
                category,
                price,
                qty: quantity,
                description,
                img: images[selectedImg].imageSrc
            }));
    }


    return (
        <>
            <div className="product">
                <div className="right">
                    <h1>{name}</h1>
                    <p>{description} </p>
                    <span className="price">{price} DH</span>
                    <div className="quantity">
                        <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </div>
                    <button className="add" onClick={handleClick}> <FaShoppingCart /> ADD TO CART</button>
                    <div className="links">
                        <div className="item">
                            ADD TO WISH LIST
                        </div>

                    </div>
                    <div className="info">
                        <span>Product Type: {category}</span>
                    </div>
                    <hr />
                    <div className="info">
                        <hr />
                        <span onClick={() => setShowMore(prev => !prev)} style={{ cursor: "pointer" }}>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
                <div className="left">
                    <div className="mainImg">
                        <img
                            src={images?.[selectedImg]?.imageSrc}
                            alt={name}
                        />
                    </div>
                    <div className="images">
                        {images && images.map((image, index) => index !== selectedImg && <img key={image._id} src={image?.imageSrc} alt={name} onClick={() => setSelectedImg(index)} />)}

                    </div>

                </div>

            </div>
            {showMore && <Reviews reviews={reviews} id={_id} />}
        </>
    )
}

export default SingleCard


