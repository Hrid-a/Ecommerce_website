import { NavLink } from "react-router-dom"
import { FaUsers, FaSellsy } from "react-icons//fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Nav = () => {
    const [stickyClass, setStickyClass] = useState("")
    const handleScroll = () => {
        if (window !== undefined) {
            const windowHeight = window.scrollY;

            windowHeight > 99 ? setStickyClass("nav-fixed-top") : setStickyClass("");
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <nav className={`admin-navagation ${stickyClass}`}>
                <ul className="nav">
                    <li className="nav__item">
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/admin"
                            className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>
                            <span><MdOutlineDashboardCustomize /></span>
                            <span className="nav__text">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/admin/products"
                            className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>
                            <span><FaSellsy /></span>
                            <span className="nav__text">products</span>
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/admin/users"
                            className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>
                            <span><FaUsers /></span>
                            <span className="nav__text">users</span>
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/admin/orders"
                            className={({ isActive }) => isActive ? "active nav__link" : "nav__link"}>
                            <span><BsFillCartCheckFill /></span>
                            <span className="nav__text">Orders</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav