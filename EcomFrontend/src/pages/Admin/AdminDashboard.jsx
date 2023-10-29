import { Outlet, useNavigate } from "react-router-dom"
import Nav from "../../components/Admin/Nav"
import { useSelector } from "react-redux"
import { useEffect } from "react";

const AdminDashboard = () => {
    const { user: { firstName, role } } = useSelector(state => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if (role !== "admin") {
            return navigate("/");
        }
    }, [role])

    return (
        <div>
            <Nav />
            <div className="dashboard-section section">
                <div className="dashboard-container">
                    <section className="title-container">
                        <h2 className="title">Welcome {firstName} </h2>
                        <p>All systems are running smoothly!</p>
                    </section>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard