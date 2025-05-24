import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import {IoIosHome} from "react-icons/io";
import {FaPhoneAlt} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <NavLink to="/ListingForm" className="footer-landing">
                    <IoIosHome />
                    Listing Form
                </NavLink>
                <NavLink to="813-830-8656" className="footer-landing">
                    <FaPhoneAlt />
                    Call A Relator
                </NavLink>
            </div>

        </footer>
    );
};

export default Footer;