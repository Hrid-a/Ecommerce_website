import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Forms/Input";
import { loginInputs } from "../utils/data";
import { loginSchema } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/features/User/userSlice";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";

const Login = () => {
    const { isSuccess, error, loading } = useSelector(state => state.user)
    const { register, handleSubmit, formState } = useForm({
        resolver: valibotResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            navigate("/");

        }

    }, [isSuccess])

    const schemaErrors = Object.values(formState.errors);

    if (schemaErrors.length) {
        toast.error(schemaErrors[0].message);
    }

    const handleLogin = (data) => {
        dispatch(userLogin(data));
    };


    return (
        <div className="section">
            <section className="title-container">
                <h2 className="title">Log in</h2>
                <p>it is quick and easy</p>
            </section>
            <div className="form">
                <Toaster richColors position="top-center" />
                <form onSubmit={handleSubmit(handleLogin)}>
                    {error && <span className="error">{error}</span>}
                    {loginInputs.map(input => {
                        return (
                            <Input key={input.id}
                                {...input} register={register}
                            />
                        )
                    })}
                    <p className="forgotPassword"><Link to="/password_reset">Forgot Password?</Link></p>
                    <Button loading={loading} className={"btn btn-primary"} text={"log in"} />
                </form>

                <p>You do not have an account <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login;