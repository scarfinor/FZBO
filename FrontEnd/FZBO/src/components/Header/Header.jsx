import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    IoIosLogOut,
    IoIosLogIn,
    IoIosAddCircleOutline,
    IoIosHome,
    IoIosMenu,
} from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import "./Header.scss";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <div className="div-header">
                <div className="div-logo">
                    <NavLink to="/">
                        <IoIosHome />
                        Landing Page
                    </NavLink>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <IoIosMenu />
                </div>
                <div className="div-link">
                    <NavLink to="/SignUp">
                        <IoIosAddCircleOutline />
                        Sign Up
                    </NavLink>
                    <NavLink to="/SignIn">
                        <IoIosLogIn />
                        Sign In
                    </NavLink>
                    <NavLink to="/Logout">
                        <IoIosLogOut />
                        Log Out
                    </NavLink>
                </div>
            </div>
            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <div className="menu-close" onClick={toggleMenu}>
                    <FaTimes />
                </div>
                <div className="side-menu-container">
                    <NavLink to="/SignUp" onClick={toggleMenu}>
                        <IoIosAddCircleOutline />
                        Sign Up
                    </NavLink>
                    <NavLink to="/SignIn" onClick={toggleMenu}>
                        <IoIosLogIn />
                        Sign In
                    </NavLink>
                    <NavLink to="/LogOut" onClick={toggleMenu}>
                        <IoIosLogOut />
                        Log Out
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};