import mainImg from "../../assets/img.jpg";
import product from "../../assets/product.png";

const FeaturedProduct = () => {
    return (
        <div className="section">
            <section className="featured">
                <article style={{ backgroundImage: `url(${mainImg})`, backgroundSize: "cover" }} className="desc">
                    <div>
                        <span>New arrivals</span>
                        <h2>
                            Brand new, modern lamps collection
                        </h2>
                        <p>Ideal for offices, bedrooms and all in between.</p>
                    </div>
                </article>
                <article className="featured__product">
                    <img src={product} alt="our featured product" />
                    <div className="card__body">
                        <h2>Lamp </h2>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default FeaturedProduct