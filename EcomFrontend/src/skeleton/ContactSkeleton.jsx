import SkItem from "./SkItem";

const ContactSkeleton = () => {
    return (
        <div style={{ width: "100%", height: "100svh" }}>
            <div style={{ width: "max-content", marginInline: "auto" }} className="section">
                <p className="sekeleton skeleton-text" style={{ width: "200px", height: "0.8rem" }}></p>
                <p className="sekeleton skeleton-text" style={{ width: "140px", height: "0.8rem" }} ></p>
            </div>
            <section className="section" style={{ width: "100%", height: "100%" }}>
                <div className="loadingSkeleton contact">
                    {SkItem()}
                    {SkItem()}
                    {SkItem()}
                </div>
            </section>
        </div>
    )
}

export default ContactSkeleton;