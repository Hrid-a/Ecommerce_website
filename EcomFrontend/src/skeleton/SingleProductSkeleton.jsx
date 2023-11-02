import SkItem from "./SkItem"

const SingleProductSkeleton = () => {
    return (
        <section>
            <div className="loadingSkeleton cart">
                {SkItem()}
                {SkItem()}
            </div>
        </section>
    )
}

export default SingleProductSkeleton