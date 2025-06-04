import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuth2Success() {
    const navigate = useNavigate();
    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        const params = new URLSearchParams(window.location.search);
        const username = params.get("username");

        if (username) {
            localStorage.setItem("Google_user", JSON.stringify({ username }));
            navigate("/listingForm");
        } else {
            navigate("/");
        }
    }, [navigate]);

    return <div>You are Signed in!</div>;
}
