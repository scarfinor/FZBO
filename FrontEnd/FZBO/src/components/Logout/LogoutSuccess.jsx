import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogoutSuccess() {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.get("http://localhost:8080/api/users/logout", { withCredentials: true });
        } catch (error) {
            console.error("Error during logout:", error);
        }

        localStorage.clear();
        sessionStorage.clear();
    };

    useEffect(() => {
        (async () => {
            await logout();

            setTimeout(() => {
                navigate("/");
            }, 3000);
        })();
    }, [navigate]);


    return (
        <div>
            <h1>You have been logged out!</h1>
        </div>
    );
}
