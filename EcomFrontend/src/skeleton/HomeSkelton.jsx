import SkItem from "./SkItem";
const HomeSkelton = () => {
    return (
        <>
            <div className="card__header" style={{ width: "100%", height: "100vh" }}>
                <div>
                    <img className="card__header header__img skeleton" id="logo-img" alt="" />
                </div>
                <h3 className="card__header header__title" id="card-title">
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <button className="btn btn-skeleton"></button>
                </h3>
            </div>
            <div style={{ height: "200px" }}></div>
            <section>
                <div className="loadingSkeleton">
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                </div>

            </section>

        </>


    )
}

export default HomeSkelton