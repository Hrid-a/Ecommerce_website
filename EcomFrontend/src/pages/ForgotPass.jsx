import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import { schema } from "../utils/auth"
import Input from "../components/Forms/Input"
import Button from "../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { Toaster, toast } from "sonner"
import { forgotPass } from "../redux/features/User/userSlice"

const ForgotPass = () => {
    const { error, isSuccess, message } = useSelector(state => state.user);
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(schema),
        values: { email: "" }
    })
    const dispatch = useDispatch();

    if (isSuccess) {
        toast.success(message)
    }

    const forgotPassword = (data) => {
        dispatch(forgotPass({ email: data.email }));
    }

    const errorsList = Object.entries(formState.errors);
    if (errorsList.length) {
        toast.error(errorsList[0].message)
    }

    return (
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
    )
}

export default ForgotPass