import { useSelector } from "react-redux"
import PasswordChanger from "../components/User/PasswordChanger"
import PublicProfile from "../components/User/PublicProfile"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Settings = () => {

    const user = useSelector(state => state.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) navigate("/");
    }, [user]);

    return (
        <div className="section settings">
            <PublicProfile />
            <PasswordChanger />
        </div>
    )
}

export default Settings