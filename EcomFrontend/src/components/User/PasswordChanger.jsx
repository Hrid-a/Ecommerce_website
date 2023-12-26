import { Toaster, toast } from "sonner"
import Button from "../Button"
import Input from "../Forms/Input"
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { changePassword } from "../../redux/features/User/userSlice";
import { changePasswordInputs } from "../../utils/data";
import { changePasswordSchema } from "../../utils/auth";

const PasswordChanger = () => {
    const { isSuccess, error, loading, message } = useSelector(state => state.user);
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(changePasswordSchema),
        defaultValues: {
            password: "",
            newPassword: "",
            confirmPassword: "",
        }
    })

    const dispatch = useDispatch();

    const handleChangePassword = (data) => {
        dispatch(changePassword({ password: data.password, newPassword: data.newPassword }))
    }

    if (isSuccess) {
        toast.success(message);
    }

    const errosList = Object.entries(formState.errors);
    if (errosList.length) {
        toast.error(errosList[0].message);
    }

    return (
        <div className="section">
            <section className="title-container">
                <h2 className="title">change password</h2>
            </section>
            <div className="form">
                {error && <p className="error">{error}</p>}
                <Toaster richColors position="top-center" />
                <form onSubmit={handleSubmit(handleChangePassword)}>

                    {changePasswordInputs.map(input => <Input key={input.id}  {...input} register={register} />)}

                    <Button loading={loading} className="btn btn-primary" text="change password" />
                </form>
            </div>
        </div>
    )
}

export default PasswordChanger