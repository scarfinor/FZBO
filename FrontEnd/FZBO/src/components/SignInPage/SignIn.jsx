import React, { useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.scss"

export default function SignIn() {
    const validation = Yup.object({
        username: Yup.string().max(50).required("Username is required"),
        password: Yup.string()
            .required("Password is required")
            .min(3, "Password must be at least 3 characters").max(50),
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
        <div className="signIn-Form-container">
            <FormikProvider value={formik}>
                <Form className="signIn-form" onSubmit={formik.handleSubmit}>
                    <div className="signIn-form-group">
                        <div className="headerText">Sign In</div>
                        <div className="textInput">
                          Username
                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Enter Username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                                className="text-input"
                            />
                            {formik.touched.username && formik.errors.username && (
                                <div className="error-message">{formik.errors.username}</div>
                            )}
                        </div>
                        <div className="textInput">
                            Password
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="text-input"
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="error-message">{formik.errors.password}</div>
                            )}
                        </div>
                    </div>
                    <div className="signUp">
                        Dont Have an Account? <a href="/SignUp">Sign Up</a>
                    </div>
                    <button type="submit" className="signIn-form-submit-btn">
                        Submit
                    </button>
                </Form>
            </FormikProvider>

            <button className="google-btn" onClick={googleSignIn}>
                <FcGoogle />
                Sign in with Google
            </button>
        </div>
    );
}