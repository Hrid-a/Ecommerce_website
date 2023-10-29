import Cart from "../components/cart/Cart";
import { Link } from "react-router-dom";
import logo from "../assets/logo-regular.png";
import { useSelector } from "react-redux";
import PersonalInfo from "../components/cart/PersonalInfo";


const CartPage = () => {

    const { user } = useSelector(state => state.user);
    return (
        <div className="section cart-container">
            {
                user ? <PersonalInfo /> :
                    (
                        <article className="cart-descripion">
                            <div className="content">
                                <div>
                                    <h1>Account</h1>
                                    <div>
                                        <p className="content__desc">
                                            To place your order now, log in to your existing account or sign up.
                                        </p>
                                        <div className="btns">
                                            <button className="btn btn-primary">have an account ? <Link to="/login">Log in</Link></button>
                                            <button className="btn last-btn">new to furniture ? <Link to="/sign up">Sign up</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="img__logo">
                                    <img src={logo} alt="our logo" />
                                </div>
                            </div>
                        </article>
                    )
            }
            <Cart />
        </div>
    )
}

export default CartPage