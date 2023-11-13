import { FaShoppingBasket } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo-regular.png";
import User from "../components/User/User";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";

const Header = () => {
    const { user } = useSelector((state) => state.user);
    const { products } = useSelector((state) => state.cart);
    const [state, setState] = useState(false);


    return (
        <header>
            <div className="logo">
                <Link to="" >
                    <img src={logo} alt="The logo image" />
                </Link>
            </div>
            <SearchBox />
            <nav className={"nav " + (state ? " d-block" : "")}>
                <button className="toggle-button close-icon" onClick={() => setState(false)}>
                    <span className="sr-only">hide the menu</span>
                    {state && <AiOutlineClose />}
                </button>
                <div className="nav__left">
                    <ul className="nav__items">
                        <li className="nav_item">
                            <Link to="/" className="nav__link">Home</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/contact" className="nav__link">contact</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/support" className="nav__link">help</Link>
                        </li>
                        {!user && <li className="nav_item">
                            <Link to="/login" className="nav__link">log in</Link>
                        </li>}
                        <li className="nav_item cart">
                            <span>{products.length}</span>
                            <Link to="/cart" className="nav__link"><FaShoppingBasket /></Link>
                        </li>
                        <li>
                            {user && <User />}
                        </li>

                    </ul>
                </div>
            </nav>
            <button className="toggle-button" onClick={() => setState(true)}>
                <span className="sr-only">Show the menu</span>
                {!state && <AiOutlineMenu />}
            </button>
        </header>
    )
}

export default Header