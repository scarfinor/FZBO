import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss"

export default function SignUp() {
    const validation = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        password: Yup.string()
            .required("Password is required")
            .min(3, "Password must be at least 3 characters"),
        verifiedPassword: Yup.string().required("Verify your password").oneOf([Yup.ref("password"), null], "Passwords must match"),
        acceptTerms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
        acceptPrivacyPolicy: Yup.bool().oneOf([true], "You must accept the privacy policy")
    });

    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            verifiedPassword: "",
            first_login: true,
            acceptTerms: false,
            acceptPrivacyPolicy: false
        },
        validationSchema: validation,
        onSubmit: async (values) => {
            const signUpRequest = {
                username: values.username,
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
                verifiedPassword: values.verifiedPassword,
                first_login: false,
                acceptTerms: values.acceptTerms,
                acceptPrivacyPolicy: values.acceptPrivacyPolicy,
            };

            try {
                const response = await axios.post(
                    "http://localhost:8080/api/auth/signUp",
                    signUpRequest,
                    { withCredentials: true }
                );

                if (response.status === 200) {
                    navigate("/SignUpSuccess");
                }
            } catch (error) {
                console.error("Sign up failed:", error.response?.data || error.message);
                alert("Sign up failed.");
            }
        },
    });

    return (
        <div className="signUp-Form-container">
            <FormikProvider value={formik}>
                <Form className="signUp-form" onSubmit={formik.handleSubmit}>
                    <div className="signUp-form-group">
                        <div className="headerText">Sign Up</div>
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
                            Email
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter Email Address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="text-input"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="error-message">{formik.errors.email}</div>
                            )}
                        </div>

                        <div className="textInput">
                            First Name
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="Enter First Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className="text-input"
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="error-message">{formik.errors.firstName}</div>
                            )}
                        </div>

                        <div className="textInput">
                            Last Name
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Enter Last Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className="text-input"
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="error-message">{formik.errors.lastName}</div>
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

                        <div className="textInput">
                            Verify Password
                            <input
                                id="verifiedpassword"
                                name="verifiedPassword"
                                type="password"
                                placeholder="Verify Password"
                                onChange={formik.handleChange}
                                value={formik.values.verifiedPassword}
                                className="text-input"
                            />
                            {formik.touched.verifiedPassword && formik.errors.verifiedPassword && (
                                <div className="error-message">{formik.errors.verifiedPassword}</div>
                            )}
                        </div>
                        </div>
                        <div className="signUp-form-group">
                            <div className="headerText">Terms & Conditions</div>

                        <div className="signUp-checkbox-container">
                            <label>
                                <input
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.acceptTerms}
                                /> I accept the Terms and Conditions
                            </label>
                            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                                <div className="error-message">{formik.errors.acceptTerms}</div>
                            )}
                            </div>
                            <div className="signUp-checkbox-container">
                            <label>
                                <input
                                    id="acceptPrivacyPolicy"
                                    name="acceptPrivacyPolicy"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.acceptPrivacyPolicy}
                                />
                                I accept the Privacy Policy
                            </label>
                            {formik.touched.acceptPrivacyPolicy && formik.errors.acceptPrivacyPolicy && (
                                <div className="error-message">{formik.errors.acceptPrivacyPolicy}</div>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="signIn-form-submit-btn">
                        Submit
                    </button>
                </Form>
            </FormikProvider>
        </div>
    );
}