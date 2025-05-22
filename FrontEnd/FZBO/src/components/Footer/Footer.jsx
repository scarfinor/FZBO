import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import {IoIosHome} from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <NavLink to="/ListingForm" className="footer-landing">
                    <IoIosHome />
                    Listing Form
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;