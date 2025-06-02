import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { TbTableDashed } from "react-icons/tb";
import {FaPhoneAlt, FaWpforms} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <NavLink to="/ListingForm" className="footer-landing">
                    <FaWpforms />
                    Listing Form
                </NavLink>
                <NavLink to="/ListingTable" className="footer-landing">
                    <TbTableDashed />
                    Listing Table
                </NavLink>
                <NavLink to="813-830-8656" className="footer-landing">
                    <FaPhoneAlt />
                    Call A Realtor
                </NavLink>
            </div>

        </footer>
    );
};

export default Footer;