
const Input = ({ id, label, register, disabled, ...otherProps }) => {
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
                    disabled
                />
            </div>
        </div>
    )
}


export default Input