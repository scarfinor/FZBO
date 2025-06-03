import React, { useEffect, useState } from 'react';
import "./ListingTable.scss";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function ListingTable() {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fzboUser = localStorage.getItem("fzbo_user");
        const googleUser = localStorage.getItem("Google_user");

        if (!fzboUser && !googleUser) {
            navigate("/");
        }

        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/listings/allListings",
                    { withCredentials: true }
                );
                setListings(response.data);
            } catch (error) {
                console.error("Failed to load Listings:", error.response?.data || error.message);
            }
        })();
    }, []);

    return (
        <div className="listing-table-container">
            <h2 className="table-header-text">Listing Table</h2>
            <table>
                <thead className="listing-table-header">
                <tr>
                    <th>ID</th>
                    <th>Style</th>
                    <th>Status Active</th>
                    <th>Expected Active Date</th>
                    <th>Full Address</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody className="listing-table-body">
                {listings.map((listing) => (
                    <tr key={listing.id}>
                        <td>{listing.id}</td>
                        <td>{listing.style}</td>
                        <td>{listing.fzboStatusActive ? "Yes" : "No"}</td>
                        <td>{listing.activeDate}</td>
                        <td>
                            <Link to={`/ListingPage/${listing.id}`}>
                                {listing.fullAddress}
                            </Link>
                        </td>
                        <td>${listing.listPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
