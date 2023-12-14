import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const ThankYou = () => {
    return (
        <>
            <div className="modal-overlay" id="modal-overlay"></div>

            <div className="modal" id="modal">
                <div className="modal-guts">
                    <FaCircleCheck className="icon" />
                    <p >Thank you for your order</p>
                    <Link to="/">
                        <button className="btn cta">BACK TO HOME</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ThankYou