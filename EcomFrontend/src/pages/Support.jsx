import { Link } from "react-router-dom"
import { VscAccount } from "react-icons/vsc";
import { BiSupport, BiStar, BiRightArrowAlt } from "react-icons/bi";
import Accordion from "../components/Accordion";
import { accordionData } from "../utils/data";
import { useState } from "react";

const Support = () => {
    const [index, setIndex] = useState(1);

    const handleClick = (id) => {
        (index === id) ? setIndex(0) : setIndex(id);
    };
    return (
        <div className="support-section section">
            <section className="title-container">
                <h2 className="title">Ready to help</h2>
                <p>24/7 Support</p>
            </section>

            <section className="support">
                <article>
                    <div className="flow">
                        <VscAccount className="icon" />
                        <h2>Account Privacy</h2>
                        <p>Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.

                        </p>
                        <Link className="link" to="/support">
                            <span>
                                Privacy policy
                            </span>


                            <BiRightArrowAlt className="link" />

                        </Link>
                    </div>
                </article>
                <article>
                    <div className="flow">
                        <BiSupport className="icon" />
                        <h2>Support Specialist</h2>
                        <p>Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.</p>
                        <Link className="link" to='/contact'>
                            <span>
                                Contact
                            </span>

                            <BiRightArrowAlt className="link" />
                        </Link>
                    </div>
                </article>
                <article>
                    <div className="flow">
                        <BiStar className="icon" />
                        <h2>Seller Standards</h2>
                        <p>
                            Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.
                        </p>
                        <Link className="link" to="/support">
                            <span>
                                Learn more
                            </span>

                            <BiRightArrowAlt className="link" />
                        </Link>
                    </div>
                </article>
            </section>

            <div className="section">
                <section className="faq">
                    <section className="title-container">
                        <h2 className="title">Find Answers</h2>
                        <p>FAQ</p>
                    </section>
                    <section className="accordion flow">
                        {accordionData.map(accordion => <Accordion key={accordion.id} data={accordion} show={accordion.id === index} handleClick={handleClick} />
                        )}
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Support