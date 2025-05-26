import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./ListingForm.scss";
import axios from "axios";

export default function ListingForm() {
    const navigate = useNavigate();

    const validation = Yup.object({
        fzboStatusActive: Yup.boolean(),
        fzboStatusComingSoon: Yup.boolean(),
        streetNumber: Yup.string().required("Street Number is required"),
        streetName: Yup.string().required("Street Name is required"),
        county: Yup.string().required("County is required"),
        city: Yup.string().required("City is required"),
        municipality: Yup.string().required("Municipality is required"),
        zipCode: Yup.string().required("Zip Code is required"),
        schoolDistrict: Yup.string().required("School District is required"),
        state: Yup.string().required("State is required"),
        listPrice: Yup.number().required("List Price is required"),
        style: Yup.string().required("Property Style is required"),
        assistingSeller: Yup.string().required("Assisting Seller is required"),
        specialListingConditions: Yup.string().required("Special Listing Conditions is required"),
        listingAgreement: Yup.string().required("Listing Agreement is required"),
        publicRemarks: Yup.string().min(10).max(1500).required("Public Remarks is required"),
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
            streetNumber: "",
            streetName: "",
            unitNumber: "",
            county: "",
            city: "",
            municipality: "",
            zipCode: "",
            schoolDistrict: "",
            directionPrefix: "",
            directionSuffix: "",
            streetSuffix: "",
            state: "",
            listPrice: "",
            ownerName: "",
            ownerPhoneNumber: "",
            occupantName: "",
            style: "",
            listingAgreement: "",
            assistingSeller: "",
            specialListingConditions: "",
            occupantType: "",
            publicRemarks: "",
        },
        validationSchema: validation,
        onSubmit: async (values) => {
            const listingRequest = {
                fzboStatusActive: values.fzboStatusActive,
                fzboStatusComingSoon: values.fzboStatusComingSoon,
                activeDate: values.activeDate,
            };

            console.log("Submitting:", listingRequest);

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
        },
    });

    return (
        <div className="listingForm-container">
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
                                    className="fzboStatusActive"
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

                        <div className="textInput">
                            Expected Active Date
                            <input
                                id="activeDate"
                                name="activeDate"
                                type="text"
                                placeholder="Select Active Date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.activeDate}
                                className="text-input"
                            />
                            {formik.touched.activeDate && formik.errors.activeDate && (
                                <div className="error-message">{formik.errors.activeDate}</div>
                            )}
                        </div>
                    </div>

                    <div className="listing-form-group">
                        <div className="headerText">Location Information</div>
                        <div className="textInput">Street Number
                            <input
                                id="streetNumber"
                                name="streetNumber"
                                type="text"
                                placeholder="Select Street Number"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.streetNumber}
                            />
                            {formik.touched.streetNumber && formik.errors.streetNumber && (
                                <div className="error-message">{formik.errors.streetNumber}</div>
                            )}
                        </div>

                        <div className="textInput">Street Name
                            <input
                                id="streetName"
                                name="streetName"
                                type="text"
                                placeholder="Select Street Name"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.streetName}
                            />
                            {formik.touched.streetName && formik.errors.streetName && (
                                <div className="error-message">{formik.errors.streetName}</div>
                            )}
                        </div>

                        <div className="textInput">Unit Number
                            <input
                                id="unitNumber"
                                name="unitNumber"
                                type="text"
                                placeholder="Select Unit Number"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.unitNumber}
                            />
                        </div>

                        <div className="textInput">County
                            <input
                                id="county"
                                name="county"
                                type="text"
                                placeholder="Select County"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.county}
                            />
                            {formik.touched.county && formik.errors.county && (
                                <div className="error-message">{formik.errors.county}</div>
                            )}
                        </div>

                        <div className="textInput">city
                            <input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="Select City"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                            />
                            {formik.touched.city && formik.errors.city && (
                                <div className="error-message">{formik.errors.city}</div>
                            )}
                        </div>

                        <div className="textInput">Municipality
                            <input
                                id="municipality"
                                name="municipality"
                                type="text"
                                placeholder="Select Municipality"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.municipality}
                            />
                            {formik.touched.municipality && formik.errors.municipality && (
                                <div className="error-message">{formik.errors.municipality}</div>
                            )}
                        </div>

                        <div className="textInput">Zip Code
                            <input
                                id="zipCode"
                                name="zipCode"
                                type="text"
                                placeholder="Select Zip Code"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.zipCode}
                            />
                            {formik.touched.zipCode && formik.errors.zipCode && (
                                <div className="error-message">{formik.errors.zipCode}</div>
                            )}
                        </div>

                        <div className="textInput">School District
                            <input
                                id="schoolDistrict"
                                name="schoolDistrict"
                                type="text"
                                placeholder="Select School District"
                                className="text-input"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolDistrict}
                            />
                            {formik.touched.schoolDistrict && formik.errors.schoolDistrict && (
                                <div className="error-message">{formik.errors.schoolDistrict}</div>
                            )}
                        </div>

                        <div className="listing-dropDown-container">Direction Prefix
                            <div>
                                <select
                                    id="directionPrefix"
                                    name="directionPrefix"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.directionPrefix}
                                >
                                    <option value="" label="Select Prefix" />
                                    <option value="N" label="N" />
                                    <option value="NE" label="NE" />
                                    <option value="E" label="E" />
                                    <option value="SE" label="SE" />
                                    <option value="S" label="S" />
                                    <option value="SW" label="SW" />
                                    <option value="W" label="W" />
                                    <option value="NW" label="NW" />
                                </select>
                            </div>
                        </div>

                        <div className="listing-dropDown-container">Street Suffix
                            <div>
                                <select
                                    id="streetSuffix"
                                    name="streetSuffix"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.streetSuffix}
                                >
                                    <option value="" label="Select Suffix" />
                                    <option value="Alley" label="Alley" />
                                    <option value="Avenue" label="Avenue" />
                                    <option value="Boulevard" label="Boulevard" />
                                    <option value="Circle" label="Circle" />
                                    <option value="Drive" label="Drive" />
                                    <option value="Expressway" label="Expressway" />
                                    <option value="Highway" label="Highway" />
                                    <option value="Lane" label="Lane" />
                                    <option value="Parkway" label="Parkway" />
                                    <option value="Place" label="Place" />
                                    <option value="Road" label="Road" />
                                    <option value="Street" label="Street" />
                                    <option value="Trail" label="Trail" />
                                    <option value="Square" label="Square" />
                                    <option value="Terrace" label="Terrace" />
                                    <option value="View" label="View" />
                                    <option value="Walk" label="Walk" />
                                    <option value="Way" label="Way" />
                                    <option value="Park" label="Park" />
                                    <option value="Drive" label="Drive" />
                                    <option value="Court" label="Court" />
                                </select>
                            </div>
                        </div>

                        <div className="listing-dropDown-container">Direction Suffix
                            <div>
                                <select
                                    id="directionSuffix"
                                    name="directionSuffix"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.directionSuffix}
                                >
                                    <option value="" label="Select Suffix" />
                                    <option value="N" label="N" />
                                    <option value="NE" label="NE" />
                                    <option value="E" label="E" />
                                    <option value="SE" label="SE" />
                                    <option value="S" label="S" />
                                    <option value="SW" label="SW" />
                                    <option value="W" label="W" />
                                    <option value="NW" label="NW" />
                                </select>
                            </div>
                        </div>

                        <div className="listing-dropDown-container">State
                            <div>
                                <select
                                    id="state"
                                    name="state"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.state}
                                >
                                    <option value="" label="Select State" />
                                    <option value="Alabama" label="Alabama" />
                                    <option value="Alaska" label="Alaska" />
                                    <option value="Arizona" label="Arizona" />
                                    <option value="Arkansas" label="Arkansas" />
                                    <option value="California" label="California" />
                                    <option value="Colorado" label="Colorado" />
                                    <option value="Connecticut" label="Connecticut" />
                                    <option value="Delaware" label="Delaware" />
                                    <option value="District of Columbia" label="District of Columbia" />
                                    <option value="Florida" label="Florida" />
                                    <option value="Georgia" label="Georgia" />
                                    <option value="Hawaii" label="Hawaii" />
                                    <option value="Idaho" label="Idaho" />
                                    <option value="Illinois" label="Illinois" />
                                    <option value="Indiana" label="Indiana" />
                                    <option value="Iowa" label="Iowa" />
                                    <option value="Kansas" label="Kansas" />
                                    <option value="Kentucky" label="Kentucky" />
                                    <option value="Louisiana" label="Louisiana" />
                                    <option value="Maine" label="Maine" />
                                    <option value="Maryland" label="Maryland" />
                                    <option value="Massachusetts" label="Massachusetts" />
                                    <option value="Michigan" label="Michigan" />
                                    <option value="Minnesota" label="Minnesota" />
                                    <option value="Mississippi" label="Mississippi" />
                                    <option value="Missouri" label="Missouri" />
                                    <option value="Montana" label="Montana" />
                                    <option value="Nebraska" label="Nebraska" />
                                    <option value="Nevada" label="Nevada" />
                                    <option value="New Hampshire" label="New Hampshire" />
                                    <option value="New Jersey" label="New Jersey" />
                                    <option value="New Mexico" label="New Mexico" />
                                    <option value="New York" label="New York" />
                                    <option value="North Carolina" label="North Carolina" />
                                    <option value="North Dakota" label="North Dakota" />
                                    <option value="Ohio" label="Ohio" />
                                    <option value="Oklahoma" label="Oklahoma" />
                                    <option value="Oregon" label="Oregon" />
                                    <option value="Pennsylvania" label="Pennsylvania" />
                                    <option value="Rhode Island" label="Rhode Island" />
                                    <option value="South Carolina" label="South Carolina" />
                                    <option value="South Dakota" label="South Dakota" />
                                    <option value="Tennessee" label="Tennessee" />
                                    <option value="Texas" label="Texas" />
                                    <option value="Utah" label="Utah" />
                                    <option value="Vermont" label="Vermont" />
                                    <option value="Virginia" label="Virginia" />
                                    <option value="Washington" label="Washington" />
                                    <option value="West Virginia" label="West Virginia" />
                                    <option value="Wisconsin" label="Wisconsin" />
                                    <option value="Wyoming" label="Wyoming" />
                                </select>
                                {formik.touched.state && formik.errors.state && (
                                    <div className="error-message">{formik.errors.state}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="listing-form-group">
                        <div className="headerText">Listing Information</div>
                        <div className="textInput">
                            List Price
                            <input
                                id="listPrice"
                                name="listPrice"
                                type="integer"
                                placeholder="Enter List Price"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.listPrice}
                                className="text-input"
                            />
                            {formik.touched.listPrice && formik.errors.listPrice && (
                                <div className="error-message">{formik.errors.listPrice}</div>
                            )}
                        </div>
                        <div className="textInput">
                            Owner's Name
                            <input
                                id="ownerName"
                                name="ownerName"
                                type="text"
                                placeholder="Enter Owner's Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ownerName}
                                className="text-input"
                            />
                            {formik.touched.ownerName && formik.errors.ownerName && (
                                <div className="error-message">{formik.errors.ownerName}</div>
                            )}
                        </div>
                        <div className="textInput">
                            Owner's Phone Number
                            <input
                                id="ownerPhoneNumber"
                                name="ownerPhoneNumber"
                                type="text"
                                placeholder="Enter Owner's Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ownerPhoneNumber}
                                className="text-input"
                            />
                            {formik.touched.ownerPhoneNumber && formik.errors.ownerPhoneNumber && (
                                <div className="error-message">{formik.errors.ownerPhoneNumber}</div>
                            )}
                        </div>
                        <div className="textInput">
                            Occupant's Name
                            <input
                                id="occupantName"
                                name="occupantName"
                                type="text"
                                placeholder="Enter Occupant's Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.occupantName}
                                className="text-input"
                            />
                            {formik.touched.occupantName && formik.errors.occupantName && (
                                <div className="error-message">{formik.errors.occupantName}</div>
                            )}
                        </div>
                        <div className="listing-dropDown-container">Property Style
                            <div>
                                <select
                                    id="style"
                                    name="style"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.style}
                                >
                                    <option value="" label="Select Style" />
                                    <option value="Villa" label="Villa" />
                                    <option value="Townhouse" label="Townhouse" />
                                    <option value="Cabin" label="Cabin" />
                                    <option value="Condominium" label="Condominium" />
                                    <option value="Manufactured Home" label="Manufactured Home" />
                                    <option value="Mobile Home" label="Mobile Home" />
                                    <option value="Single Family Residence" label="Single Family Residence" />
                                    <option value="Stock Cooperative" label="Stock Cooperative" />
                                </select>
                                {formik.touched.style && formik.errors.style && (
                                    <div className="error-message">{formik.errors.style}</div>
                                )}
                            </div>
                        </div>
                        <div className="listing-dropDown-container">Listing Agreement
                            <div>
                                <select
                                    id="listingAgreement"
                                    name="listingAgreement"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.listingAgreement}
                                >
                                    <option value="" label="Select Listing Agreement" /> />
                                    <option value="Open" label="Open" />
                                    <option value="Probate" label="probate" />
                                    <option value="Purchaser Exemptions" label="Purchaser Exemptions" />
                                    <option value="Transaction Brokerage" label="Transaction Brokerage" />
                                </select>
                                {formik.touched.listingAgreement && formik.errors.listingAgreement && (
                                    <div className="error-message">{formik.errors.listingAgreement}</div>
                                )}
                            </div>
                        </div>
                        <div className="listing-dropDown-container">Licensee Assisting Seller
                            <div>
                                <select
                                    id="assistingSeller"
                                    name="assistingSeller"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.assistingSeller}
                                >
                                    <option value="" label="Select assisting seller" />
                                    <option value="Designated Agent" label="Designated Agent" />
                                    <option value="Seller's Agent" label="Seller's Agent" />
                                    <option value="Transaction Brokerage" label="Transaction Brokerage" />
                                    <option value="Owner" label="Owner" />
                                </select>
                                {formik.touched.assistingSeller && formik.errors.assistingSeller && (
                                    <div className="error-message">{formik.errors.assistingSeller}</div>
                                )}
                            </div>
                        </div>
                        <div className="listing-dropDown-container">Special Listing Conditions
                            <div>
                                <select
                                    id="specialListingConditions"
                                    name="specialListingConditions"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.specialListingConditions}
                                >
                                    <option value="" label="Select Special Listing Conditions" />
                                    <option value="Auction" label="Auction" />
                                    <option value="Bankruptcy Property" label="Bankruptcy Property" />
                                    <option value="Foreclosure" label="Foreclosure" />
                                    <option value="HUD Owned" label="HUD Owned" />
                                    <option value="Listed As Is" label="Listed As Is" />
                                    <option value="Notice Of Defualt" label="Noice Of Defualt" />
                                    <option value="Probate Listing" label="Probate Listing" />
                                    <option value="Real Estate Owned" label="Real Estate Owned" />
                                    <option value="Short Sale" label="Short Sale" />
                                    <option value="Standard" label="Standard" />
                                    <option value="Third Party Approval" label="Third Party Approval" />
                                </select>
                                {formik.touched.specialListingConditions && formik.errors.specialListingConditions && (
                                    <div className="error-message">{formik.errors.specialListingConditions}</div>
                                )}
                            </div>
                        </div>
                        <div className="listing-dropDown-container">Occupant Type
                            <div>
                                <select
                                    id="occupantType"
                                    name="occupantType"
                                    className="dropDown"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.occupantType}
                                >
                                    <option value="" label="Select Occupant Type" />
                                    <option value="Owner" label="Owner" />
                                    <option value="Tenant" label="Tenant" />
                                    <option value="Vacant" label="Vacant" />
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="listing-form-group">
                        <div className="headerText">Remarks</div>
                        <div className="textInput">
                            Public Remarks
                            <input
                                id="publicRemarks"
                                name="publicRemarks"
                                type="text"
                                placeholder="Enter Public Remarks"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.publicRemarks}
                                className="text-input"
                            />
                            {formik.touched.publicRemarks && formik.errors.publicRemarks && (
                                <div className="error-message">{formik.errors.publicRemarks}</div>
                            )}
                        </div>
                    </div>

                    <button type="submit" className="listing-form-submit-btn" disabled={formik.isSubmitting}>
                        {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </Form>
            </FormikProvider>
        </div>
    );
}
