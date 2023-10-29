import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Forms/Input";
import { signUpInput } from "../utils/data";
import { registerSchema } from "../utils/auth";
import InputFile from "../components/Forms/InputFile";
import { Toaster, toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { handleError, userSignUp } from "../redux/features/User/userSlice";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";


const Signup = () => {
    const { isSuccess, error, loading, message } = useSelector(state => state.user);
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    })
    const dispatch = useDispatch();
    const [image, setImage] = useState("");

    if (isSuccess) {
        toast.success('Your account has been created successfully');
    }


    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const schemaErrors = Object.values(formState.errors);
    if (schemaErrors.length) {
        dispatch(handleError(schemaErrors[0].message));
    } else {
        dispatch(handleError(""));
    }

    const registerUser = (data) => {
        const formData = new FormData();
        Object.entries(data).map(item => formData.append(item[0], item[1]));
        formData.append('image', image);
        dispatch(userSignUp(formData));

    };

    return (
        <div className="section">
            <Toaster richColors position="top-center" />
            <section className="title-container">
                <h2 className="title">Sign up</h2>
                <p>it is quick and easy</p>
            </section>
            <div className="form">
                <form onSubmit={handleSubmit(registerUser)}>
                    {error && <span className="error">{error}</span>}
                    {message && <span className="error">{message}</span>}
                    {signUpInput.map(input => {
                        return (
                            <Input key={input.id}
                                {...input} register={register} />

                        )
                    })}
                    <div className="inputFile">
                        <InputFile handleImage={handleImage} />
                        {image && <span className="length">{1}</span>}
                    </div>
                    <Button loading={loading} className={"btn btn-primary"} text={"sign up"} />
                </form>

                <p>Already have an account <Link to="/login">Log in</Link></p>
            </div>
        </div>
    )
}

export default Signup;