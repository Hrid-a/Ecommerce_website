import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ data, refElement }) => {
    const [imgIndex, setImgIndex] = useState(1);

    const { _id, name, images, price } = data;
    return (
        <div className="card" ref={refElement}>
            <div className="card__header">
                <Link to={`product/${_id}`}>

                    <img src={images?.[imgIndex]?.imageSrc} alt="imgae" />
                </Link>
                <div className="card__body">
                    <h2>{name}</h2>
                    <p>{price} DH </p>
                    <div className="btns">
                        <span className="image-type" onClick={() => setImgIndex(0)}></span>
                        <span className="image-type" onClick={() => setImgIndex(1)}></span>
                        <span className="image-type" onClick={() => setImgIndex(2)}></span>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Card