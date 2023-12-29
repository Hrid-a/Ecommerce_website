import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import { schema } from "../utils/auth"
import Input from "../components/Forms/Input"
import Button from "../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { Toaster, toast } from "sonner"
import { forgotPass } from "../redux/features/User/userSlice"
import { Link } from "react-router-dom"

const ForgotPass = () => {
    const { error, isSuccess } = useSelector(state => state.user);
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(schema),
        values: { email: "" }
    })
    const dispatch = useDispatch();



    const forgotPassword = (data) => {
        dispatch(forgotPass({ email: data.email }));
    }

    const errorsList = Object.values(formState.errors);
    if (errorsList.length) {
        toast.error(errorsList[0].message)
    }



    return isSuccess ? (
        <div className="section">
            <section className="title-container">
                <h2 className="title">Reset Your Password</h2>
            </section>
            <Toaster richColors position="top-center" />
            <section className="form">
                {error && <p className="error">{error}</p>}
                <p>Enter your user account&apos;s verified email address and we will send you a password reset link.</p>
                <form onSubmit={handleSubmit(forgotPassword)}>
                    <Input register={register} {...{ name: "email", id: "email", label: "email" }} />
                    <Button className="btn btn-primary" text="send password reset email" />
                </form>
            </section>
        </div>
    ) : (
        <div>
            <div className="section">
                <section className="title-container">
                    <h2 className="title">Check Your inbox</h2>
                </section>
                <section className="form password_confirm flow">
                    <p>we have sent you an email in order to change you password.</p>
                    <Link to={"/"} className="btn btn-primary">Go  back home</Link>
                </section>
            </div>
        </div>
    )
}

export default ForgotPass