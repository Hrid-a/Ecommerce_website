import avatar from "../assets/avatar.jpg";
import FeaturedProduct from "../components/Products/FeaturedProduct";
import Products from "../components/Products/Products";
import { FaShippingFast, FaShieldAlt, FaCartArrowDown } from "react-icons/fa";
import { RiBankCard2Line } from "react-icons/ri";
import useProducts from "../hooks/useProducts";

const Home = () => {
    useProducts();
    return (
        <>
            <img src={avatar} className="bg-image" alt="a background imaage" />
            <div className="home">
                <div className="hero-section">
                    <div className="section">
                        <div>
                            <p>Black Friday in july</p>
                        </div>
                        <div className="adds">
                            <h1>Up to 50% off</h1>
                            <p>Hundreds of styles available</p>
                        </div>

                        <div>
                            <button className="btn btn-secondary" style={{ width: "200px" }}>shop now</button>
                        </div>
                    </div>
                </div>

                <div className="product-section">

                    <Products />
                    <FeaturedProduct />
                    <div className="section">
                        <div className="title-container">
                            <h2 className="title">Why choose us</h2>
                            <p>Best products</p>
                        </div>
                        <section className="why-section">
                            <article className="">
                                <FaShippingFast size={35} className="icon" />
                                <h3 className="why-section__title">Fast delivery</h3>
                                <p className="why-section__description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                                </p>
                            </article>
                            <article className="">
                                <RiBankCard2Line size={35} className="icon" />
                                <h3 className="why-section__title">Free Shipping</h3>
                                <p className="why-section__description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                                </p>
                            </article>
                            <article className="">
                                <FaShieldAlt size={35} className="icon" />
                                <h3 className="why-section__title">Secure Checkout</h3>
                                <p className="why-section__description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                                </p>
                            </article>
                            <article className="">
                                <FaCartArrowDown size={35} className="icon" />
                                <h3 className="why-section__title">Easy return</h3>
                                <p className="why-section__description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                                </p>
                            </article>

                        </section>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home



