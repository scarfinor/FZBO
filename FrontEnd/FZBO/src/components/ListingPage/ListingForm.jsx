import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./ListingForm.scss";

export default function ListingForm() {
    const navigate = useNavigate();

    const validation = Yup.object({
        fzboStatusActive: Yup.boolean(),
        fzboStatusComingSoon: Yup.boolean(),
        activeDate: Yup.string().when("fzboStatusComingSoon", {
            is: true,
            then: (schema) => schema
                .required("Active Date is required")
                .min(10, "Active Date must be at least 10 characters")
                .max(10, "Active Date must be at most 10 characters")
                .matches(
                    /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/,
                    "Active Date must be in the format MM-DD-YYYY"
                ),
            otherwise: (schema) => schema.notRequired(),
        }),
    });

    const formik = useFormik({
        initialValues: {
            fzboStatusActive: false,
            fzboStatusComingSoon: false,
            activeDate: "",
        },
        validationSchema: validation,
        onSubmit: async (values) => {
            const listingRequest = {
                fzboStatusActive: values.fzboStatusActive,
                fzboStatusComingSoon: values.fzboStatusComingSoon,
                activeDate: values.activeDate,
            };

            console.log("Submitting:", listingRequest);

            /*
            try {
              const response = await axios.post(
                "http://localhost:8080/api/listings/submitListing",
                listingRequest,
                { withCredentials: true }
              );

              if (response.status === 200) {
                navigate("/ListingPage");
              }
            } catch (error) {
              console.error("Listing submission failed:", error.response?.data || error.message);
              alert("Listing submission failed.");
            }
            */
        },
    });

    return (
        <div className="listingForm-container">
            <h1>Listing Form</h1>
            <FormikProvider value={formik}>
                <Form className="listing-form" onSubmit={formik.handleSubmit}>
                    <div className="listing-form-group">
                        <div className="headerText">FZBO Status</div>
                        <div className="listing-checkbox-container">
                            <label>
                                <input
                                    id="fzboStatusActive"
                                    name="fzboStatusActive"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusActive}
                                />
                                FZBO Status Active
                            </label>

                            <label>
                                <input
                                    id="fzboStatusComingSoon"
                                    name="fzboStatusComingSoon"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />
                                FZBO Status Coming Soon
                            </label>
                        </div>

                        <div className="form-textInput">
                            Expected Active Date
                            <input
                                id="activeDate"
                                name="activeDate"
                                type="text"
                                placeholder="Active Date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.activeDate}
                                className={formik.touched.activeDate && formik.errors.activeDate ? "error" : ""}
                            />
                            {formik.touched.activeDate && formik.errors.activeDate && (
                                <div className="error-message">{formik.errors.activeDate}</div>
                            )}
                        </div>
                    </div>

                    <div className="listing-form-group">
                        <div className="headerText">General Information</div>
                        <div className="form-textInput"> Street Number
                            <input
                                id="streetNumber"
                                name="streetNumber"
                                type="text"
                                placeholder="Street Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                            />
                        </div>

                        <div className="listing-checkbox-container">
                            <div className="center-text">Direction Prefix</div>
                            <label>
                                <input
                                    id="N"
                                    name="N"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusActive}
                                />
                                N
                            </label>

                            <label>
                                <input
                                    id="E"
                                    name="E"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />E
                            </label>

                            <label>
                                <input
                                    id="S"
                                    name="S"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />S
                            </label>

                            <label>
                                <input
                                    id="W"
                                    name="W"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />W
                            </label>

                            <label>
                                <input
                                    id="NE"
                                    name="NE"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />NE
                            </label>

                            <label>
                                <input
                                    id="NW"
                                    name="NW"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />NW
                            </label>

                            <label>
                                <input
                                    id="SE"
                                    name="SE"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />SE
                            </label>

                            <label>
                                <input
                                    id="SW"
                                    name="SW"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.fzboStatusComingSoon}
                                />SW
                            </label>

                        </div>

                        <div className="form-textInput"> Street Name
                            <input
                                id="streetName"
                                name="streetName"
                                type="text"
                                placeholder="Street Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            </FormikProvider>
        </div>
    );
}
