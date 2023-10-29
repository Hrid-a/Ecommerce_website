import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../assets/logo-regular.png";
const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__nav">
                <article>
                    <img src={logo} alt="Store logo" />
                </article>
                <article className="flow">
                    <div className="nav">
                        <h4>links</h4>
                        <ul>
                            <li className="nav__item">
                                <Link to="/contact" className="nav__link">help</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/" className="nav__link">track order</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/support" className="nav__link">help</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>categories</h4>
                        <ul>
                            <li className="nav__item">
                                <Link to="/" className="nav__link" >bedrom</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/" className="nav__link" >decor</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/" className="nav__link" >living room</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/" className="nav__link" >office</Link>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="footer__copy-right">
                <article>
                    <p>Copyright © 2023 Furniture Shop | Powered by Furniture Shop</p>
                </article>
                <article className='social-icon'>
                    <span>
                        <FaFacebookF />
                    </span>
                    <span>
                        <FaYoutube />
                    </span>
                    <span>
                        <FaInstagram />
                    </span>
                    <span>
                        <FaTwitter />
                    </span>
                </article>
            </section>
        </footer>
    )
}

export default Footer