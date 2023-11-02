import SkItem from "./SkItem"

const CartSkeleton = () => {
    return (
        <section>
            <div className="loadingSkeleton product">
                {SkItem()}
                {SkItem()}
            </div>
        </section>
    )
}

export default CartSkeleton;