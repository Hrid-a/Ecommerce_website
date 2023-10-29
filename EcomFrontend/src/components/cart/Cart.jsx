import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { removeItem, resetCart } from "../../redux/features/Product/cartSlice";


const Cart = () => {
    const { products } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = () => {
        return products.reduce((current, product) => product.price * product.qty + current, 0);
    }
    return (
        <>
            <article className="cart">
                <div>
                    {products?.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="details">
                                <h1>{item.name}</h1>
                                <p>{item.description?.substring(0, 100)}</p>
                                <div className="price">
                                    {item.qty} x {item.price}DH
                                </div>
                            </div>
                            <span><FaTrash
                                className="delete"
                                onClick={() => {
                                    console.log("remove item");
                                    dispatch(removeItem(item.id))

                                }}
                            /></span>
                        </div>
                    ))}
                    <div>
                        <h5>Bill details</h5>
                        <p className="details-fee">
                            <span>delivery fee</span>
                            <span>Free</span>
                        </p>
                    </div>
                </div>

                <div className="total">
                    <span>TO PAY</span>
                    <span>{totalPrice()} DH</span>
                </div>
                <span className="reset" onClick={() => dispatch(resetCart())}>
                    Reset Cart
                </span>
            </article>
        </>
    )
}

export default Cart