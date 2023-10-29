import { useSelector } from "react-redux";
import moment from "moment";

const ProfilePage = () => {
    const { user } = useSelector(state => state.user)

    return (
        <section className="section profile-section">
            <div className="container">
                <div className="card p-4 ">
                    <div className=" image flow">
                        <button className="btn btn-secondary">
                            <img src={user?.image?.url} height="100" width="100" />
                        </button>
                        <span className="name">{user?.firstName}</span>
                        <span className="idd">{user?.email}</span>
                        <div className="orders">
                            <span className="number">1069
                                <span className="follow">Orders</span>
                            </span>
                        </div>
                        {/* <div className="">
                            <button className="btn1 btn-dark">Edit Profile</button>
                        </div> */}
                        <div className="text mt-3">
                        </div>

                        <div className="date ">
                            <span className="join">Joined {moment(user?.createdAt).format('ll')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default ProfilePage