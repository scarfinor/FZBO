import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ListingPage() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
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
        <div className="listing-page">
            <h1>Listing Details</h1>
            <p><strong>Address:</strong> {listing.fullAddress}</p>
            <p><strong>Style:</strong> {listing.style}</p>
            <p><strong>Price:</strong> ${listing.listPrice}</p>
        </div>
    );
}