import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../redux/features/User/userSlice";

const User = () => {
    const { user: { image, firstName, lastName } } = useSelector(state => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = () => {
        dispatch(userLogOut());
        navigate("/");
    }

    return (
        <>
            <div className="nav_item">
                <img
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="profile_image"
                    src={image?.url}
                    alt="user Profile"
                />

            </div>
            {isOpen && <div className="dropDown flow">
                <div className="header">
                    <img src={image.url} alt="image profile" className="profile_image" />
                    <span>{firstName} {lastName}</span>
                </div>
                <Link to="/profile" className="btn btn-rounded">Profile</Link>
                <ul>
                    <li>
                        <Link to='/settings'>settings</Link>
                    </li>
                    <li onClick={handleSignOut}>
                        Log Out
                    </li>
                </ul>
            </div>}
        </>
    )
}

export default User