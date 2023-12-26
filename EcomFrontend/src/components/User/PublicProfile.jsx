import { useForm } from "react-hook-form"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useDispatch, useSelector } from "react-redux"
import { updateUserSchema } from "../../utils/auth"
import { useRef, useState } from "react"
import { updateUser } from "../../redux/features/User/userSlice"
import { Toaster, toast } from "sonner"
import { signUpInput } from "../../utils/data"
import Input from "../Forms/Input"
import Button from "../Button"

const PublicProfile = () => {
    const { user: values, isSuccess, error, loading, message } = useSelector(state => state.user);
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(updateUserSchema),
        values
    })
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.files.length) setImage(e.target.files[0]);
    }

    const handleClick = () => {
        inputRef.current.click()
    }

    const handleUpdateUserInof = (data) => {
        const formData = new FormData();
        Object.entries(data).map(entry => formData.append(entry[0], entry[1]));
        if (image) {
            formData.append("image", image);
        }

        dispatch(updateUser(formData));
    }

    if (isSuccess && message) {
        toast.success(message);
    }

    const errosList = Object.entries(formState.errors);
    if (errosList.length) {
        toast.error(errosList[0].message);
    }
    return (
        <>
            <section className="title-container">
                <h2 className="title">Public Profile</h2>
            </section>
            <div className="form">
                {error && <p className="error">{error}</p>}
                <Toaster richColors position="top-center" />
                <form onSubmit={handleSubmit(handleUpdateUserInof)}>
                    <div className="flex">
                        <div className="inputs">

                            {signUpInput.map(input => input.id !== "password" && <Input key={input.id} {...{ ...input, disbaled: true }} register={register} />)}
                        </div>
                        <div className="image-container">
                            <input type="file" name="image" ref={inputRef} className="input-file" onChange={handleChange} />
                            <img src={values?.image?.url} alt="userProfile" />
                            <span className="input-span" onClick={handleClick}>Edit</span>
                        </div>
                    </div>
                    <Button loading={loading} className="btn btn-primary" text="updateProfile" />
                </form>
            </div>
        </>
    )
}

export default PublicProfile;