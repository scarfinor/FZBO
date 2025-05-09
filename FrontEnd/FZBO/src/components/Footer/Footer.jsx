import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import {IoIosHome} from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <NavLink to="/" className="footer-landing">
                    <IoIosHome />
                    Landing Page
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;