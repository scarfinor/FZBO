import React, { useEffect, useState } from 'react';
import "./ListingTable.scss";
import axios from "axios";

export default function ListingTable() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/listings/allListings",
                    { withCredentials: true }
                );
                setListings(response.data);
            } catch (error) {
                console.error("Failed to load Listings:", error.response?.data || error.message);
                alert("Listing table failed to load.");
            }
        })();
    }, []);

    return (
        <div className="listing-table-container">
            <h2 className="table-title">Listing Table</h2>
            <table>
                <thead className="table-header">
                <tr>
                    <th>ID</th>
                    <th>Style</th>
                    <th>Status Active</th>
                    <th>Expected Active Date</th>
                    <th>Full Address</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody className="table-body">
                {listings.map((listing) => (
                    <tr key={listing.id}>
                        <td>{listing.id}</td>
                        <td>{listing.style}</td>
                        <td>{listing.fzboStatusActive ? "Yes" : "No"}</td>
                        <td>{listing.activeDate}</td>
                        <td>{listing.fullAddress}</td>
                        <td>${listing.listPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
