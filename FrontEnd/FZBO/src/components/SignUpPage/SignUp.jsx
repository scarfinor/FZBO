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
        verifiedPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
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
        <div className="signUp-container">
            <h1>Sign Up</h1>
            <FormikProvider value={formik}>
                <Form className="signUp-form" onSubmit={formik.handleSubmit}>
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
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className={formik.touched.email && formik.errors.email ? "error" : ""}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="error-message">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            className={formik.touched.firstName && formik.errors.firstName ? "error" : ""}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="error-message">{formik.errors.firstName}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            className={formik.touched.lastName && formik.errors.lastName ? "error" : ""}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="error-message">{formik.errors.lastName}</div>
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

                    <div className="form-group">
                        <input
                            id="verifiedpassword"
                            name="verifiedPassword"
                            type="password"
                            placeholder="Verify Password"
                            onChange={formik.handleChange}
                            value={formik.values.verifiedPassword}
                            className={formik.touched.verifiedPassword && formik.errors.verifiedPassword ? "error" : ""}
                        />
                        {formik.touched.verifiedPassword && formik.errors.verifiedPassword && (
                            <div className="error-message">{formik.errors.verifiedPassword}</div>
                        )}
                    </div>

                    <div className="chckbox-container">
                        <label>
                            <input
                                id="acceptTerms"
                                name="acceptTerms"
                                type="checkbox"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.acceptTerms}
                            />
                            I accept the Terms and Conditions
                        </label>
                        {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                            <div className="error-message">{formik.errors.acceptTerms}</div>
                        )}
                    </div>

                    <div className="chckbox-container">
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

                    <button type="submit" className="submit-btn" disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            </FormikProvider>
        </div>
    );
}