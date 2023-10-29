import { useRef } from "react"

const InputFile = ({ handleImage, ...otherProps }) => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.click();
    }
    return (
        <div className="form-group">
            <label htmlFor="image" className="label">
                <input name="image" ref={inputRef} type="file" {...otherProps} onChange={handleImage} />
                <span onClick={handleClick}>Select a file</span>
            </label>
        </div>
    )
}

export default InputFile