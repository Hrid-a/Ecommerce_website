
const Textarea = ({ register, label }) => {
  return (
    <div className="form-group">
      <div className="form-fieldGroupLabel">
        <label htmlFor={label}>
          {label}
        </label>
      </div>

      <div className="form-fieldGroupInput">

        <textarea
          name={label}
          id="message"
          rows={4}
          cols={40}
          {...register(label)}
        />
      </div>

    </div>
  )
}

export default Textarea