
const Button = ({ loading, className, text, disabledBtn }) => {
    return (
        <button type="submit" className={className} style={{ pointerEvents: `${disabledBtn ? "none" : ""}` }} >
            {loading ? "Loading ..." : text}
        </button>
    )
}

export default Button