
const Input = ({ id, label, register, ...otherProps }) => {
    return (
        <div className="form-group">
            <div className="form-fieldGroupLabel">
                <label htmlFor={id}>{label}</label>
            </div>
            <div className="form-fieldGroupInput">
                <input
                    autoComplete="true"

                    {...otherProps}
                    {...register(id)}
                />
            </div>
        </div>
    )
}


export default Input