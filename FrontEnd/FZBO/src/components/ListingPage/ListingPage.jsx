import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import "./ListingPage.scss"

export default function ListingPage() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fzboUser = localStorage.getItem("fzbo_user");
        const googleUser = localStorage.getItem("Google_user");

        if (!fzboUser && !googleUser) {
            navigate("/");
        }

        const getListing = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/listings/listing/${id}`, {
                    withCredentials: true,
                });
                setListing(response.data);
            } catch (err) {
                console.error("Error fetching listing:", err);
                alert("Error fetching listing.");
            }
        };
        getListing();
    }, [id]);

    if (!listing) {
        return <div>Loading listing...</div>;
    }

    return (
        <div className="listing-page-container">
            <h1 className="title">Listing Details</h1>
            <div className="listing-details">
                <p><strong>Style:</strong> {listing.style}</p>
                <p><strong>Price:</strong> ${listing.listPrice}</p>
                <p><strong>Address:</strong> {listing.fullAddress}</p>
            </div>
        </div>
    );
}