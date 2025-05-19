import React, { useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.scss"

export default function SignIn() {
    const validation = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
            .required("Password is required")
            .min(3, "Password must be at least 3 characters"),
    });

    const navigate = useNavigate();

    const googleSignIn = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validation,
        onSubmit: async (values) => {
            const signInRequest = {
                username: values.username,
                password: values.password,
                first_login: false,
            };

            try {
                const response = await axios.post(
                    "http://localhost:8080/api/auth/signIn",
                    signInRequest,
                    { withCredentials: true }
                );

                if (response.status === 200) {
                    const { username, firstName, lastName } = signInRequest;
                    localStorage.setItem("fzbo_user", JSON.stringify({ username, firstName, lastName }));
                    navigate("/SignInSuccess");
                }
            } catch (error) {
                console.error("Login failed:", error.response?.data || error.message);
                alert("Login failed. Please check your credentials.");
            }
        },
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        const firstLogin = urlParams.get("firstLogin");

        if (token) {
            console.log("OAuth2 Redirect - Token:", token);
            console.log("OAuth2 Redirect - FirstLogin:", firstLogin);
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="signIn-container">
            <h1>Sign In</h1>
            <FormikProvider value={formik}>
                <Form className="signIn-form" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            className={formik.touched.username && formik.errors.username ? "error" : ""}
                        />
                        {formik.touched.username && formik.errors.username && (
                            <div className="error-message">{formik.errors.username}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className={formik.touched.password && formik.errors.password ? "error" : ""}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="error-message">{formik.errors.password}</div>
                        )}
                    </div>

                    <button type="submit" className="submit-btn" disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            </FormikProvider>

            <button className="google-btn" onClick={googleSignIn}>
                <FcGoogle size={20} style={{ marginRight: 8 }} />
                Sign in with Google
            </button>
        </div>
    );
}