import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    IoIosLogOut,
    IoIosLogIn,
    IoIosAddCircleOutline,
    IoIosHome,
    IoIosMenu,
} from "react-icons/io";
import {FaTimes, FaWpforms} from "react-icons/fa";
import "./Header.scss";
import {TbTableDashed} from "react-icons/tb";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <div className="div-header">
                <div className="div-logo">
                    <NavLink to="/">
                        <IoIosHome />
                        FZBO
                    </NavLink>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <IoIosMenu />
                </div>
                <div className="div-link">
                    <NavLink to="/LogoutSuccess">
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
                    <NavLink to="/ListingForm">
                        <FaWpforms />
                        Listing Form
                    </NavLink>
                    <NavLink to="/ListingTable">
                        <TbTableDashed />
                        Listing Table
                    </NavLink>
                    <NavLink to="/SignUp" onClick={toggleMenu}>
                        <IoIosAddCircleOutline />
                        Sign Up
                    </NavLink>
                    <NavLink to="/SignIn" onClick={toggleMenu}>
                        <IoIosLogIn />
                        Sign In
                    </NavLink>
                    <NavLink to="/LogoutSuccess" onClick={toggleMenu}>
                        <IoIosLogOut />
                        Log Out
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};