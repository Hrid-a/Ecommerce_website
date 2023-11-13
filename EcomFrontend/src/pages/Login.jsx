import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Forms/Input";
import { loginInputs } from "../utils/data";
import { loginSchema } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleError, userLogin } from "../redux/features/User/userSlice";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useEffect } from "react";

const Login = () => {
    const { isSuccess, error, loading, message, user } = useSelector(state => state.user)
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
            if (user && user.role === 'admin') {
                navigate("/admin");
            } else if (user.role === "user") {
                navigate("/");
            }
        }

    }, [isSuccess])
    const schemaErrors = Object.values(formState.errors);

    if (schemaErrors.length) {
        dispatch(handleError(schemaErrors[0].message));
    } else {
        dispatch(handleError(""));
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
                <form onSubmit={handleSubmit(handleLogin)}>
                    {error && <span className="error">{error}</span>}
                    {message && <span className="error">{message}</span>}
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