
const Button = ({ loading, className, text }) => {
    return (
        <button type="submit" className={className}>
            {loading ? "Loading..." : text}
        </button>
    )
}

export default Button