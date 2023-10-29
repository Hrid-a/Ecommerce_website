import SkItem from "./SkItem"

const SingleProductSkeleton = () => {
    return (
        <section>
            <div className="loadingSkeleton product">
                {SkItem()}
                {SkItem()}
                {/* {SkItem()} */}
            </div>

        </section>
    )
}

export default SingleProductSkeleton