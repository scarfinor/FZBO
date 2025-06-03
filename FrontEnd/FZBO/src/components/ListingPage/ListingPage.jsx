import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import tempImage  from '../../tempImage/tempImage.jpg';
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
                 console.log(response.data);
            } catch (err) {
                console.error("Error fetching listing:", err);
                alert("Error fetching listing.");
            }
        };
        getListing();
    }, [id]);

    if (!listing) {
        return <div>Loading listing failed</div>;
    }

    return (
        <div className="listing-page-container">
            <div className="listing-header">
                <h1>{listing.fullAddress}</h1>
            </div>

            <div className="listing-main">
                <div className="listing-image-container">
                    <img src={tempImage} alt="tempImage" />
                </div>

                <div className="listing-details">
                    <div className="detail-row">
                        <span className="label">Style:</span>
                        <span className="value">{listing.style}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Price:</span>
                        <span className="value">${listing.listPrice.toLocaleString()}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">Address:</span>
                        <span className="value">{listing.fullAddress}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label">FZBO Status:</span>
                        <span className="value">{listing.fzboStatusActive ? "Active" : listing.activeDate}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}