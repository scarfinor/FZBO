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
            streetNumber: "",
            streetName: "",
            unitNumber: "",
            county: "",
            city: "",
            municipality: "",
            zipCode: "",
            schoolDistrict: "",
            directionPrefix: "",
            streetSuffix: "",
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

                        <div className="form-textInput">
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
                        <div className="headerText">General Information</div>
                        <div className="form-textInput">Street Number
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
                        </div>

                        <div className="form-textInput">Street Name
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
                        </div>

                        <div className="form-textInput">Unit Number
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

                        <div className="form-textInput">County
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
                        </div>

                        <div className="form-textInput">City
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
                        </div>

                        <div className="form-textInput">Municipality
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
                        </div>

                        <div className="form-textInput">Zip Code
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
                        </div>

                        <div className="form-textInput">School District
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
                                    <option value="prefix1" label="N" />
                                    <option value="prefix2" label="NE" />
                                    <option value="prefix3" label="NW" />
                                    <option value="prefix4" label="S" />
                                    <option value="prefix5" label="SE" />
                                    <option value="prefix6" label="SW" />
                                    <option value="prefix7" label="E" />
                                    <option value="prefix8" label="W" />
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
                                    <option value="suffix1" label="Alley" />
                                    <option value="suffix2" label="Anex" />
                                    <option value="suffix3" label="Arcde" />
                                    <option value="suffix4" label="Avenue" />
                                    <option value="suffix5" label="Bayou" />
                                    <option value="suffix6" label="Beach" />
                                    <option value="suffix7" label="Bend" />
                                    <option value="suffix8" label="Bluff" />
                                    <option value="suffix9" label="Bluffs" />
                                    <option value="suffix10" label="Bottom" />
                                    <option value="suffix11" label="Boulevard" />
                                    <option value="suffix12" label="Branch" />
                                    <option value="suffix13" label="Bridge" />
                                    <option value="suffix14" label="Brook" />
                                    <option value="suffix15" label="Brooks" />
                                    <option value="suffix16" label="Burg" />
                                    <option value="suffix17" label="Burgs" />
                                    <option value="suffix18" label="Bypass" />
                                    <option value="suffix19" label="Camp" />
                                    <option value="suffix20" label="Canyon" />
                                    <option value="suffix21" label="Cape" />
                                    <option value="suffix22" label="Causeway" />
                                    <option value="suffix23" label="Center" />
                                    <option value="suffix24" label="Centers" />
                                    <option value="suffix25" label="Circle" />
                                    <option value="suffix26" label="Circles" />
                                    <option value="suffix27" label="Cliff" />
                                    <option value="suffix28" label="Cliffs" />
                                    <option value="suffix29" label="Club" />
                                    <option value="suffix30" label="Common" />
                                    <option value="suffix31" label="Corner" />
                                    <option value="suffix32" label="Corners" />
                                    <option value="suffix33" label="Course" />
                                    <option value="suffix34" label="Court" />
                                    <option value="suffix35" label="Courts" />
                                    <option value="suffix36" label="Cove" />
                                    <option value="suffix37" label="Coves" />
                                    <option value="suffix38" label="Creek" />
                                    <option value="suffix39" label="Crescent" />
                                    <option value="suffix40" label="Crest" />
                                    <option value="suffix41" label="Crossing" />
                                    <option value="suffix42" label="Crossroad" />
                                    <option value="suffix43" label="Curve" />
                                    <option value="suffix44" label="Dale" />
                                    <option value="suffix45" label="Dam" />
                                    <option value="suffix46" label="Divide" />
                                    <option value="suffix47" label="Drive" />
                                    <option value="suffix48" label="Drive" />
                                    <option value="suffix49" label="Drives" />
                                    <option value="suffix50" label="Estate" />
                                    <option value="suffix51" label="Estates" />
                                    <option value="suffix52" label="Expressway" />
                                    <option value="suffix53" label="Extension" />
                                    <option value="suffix54" label="Extensions" />
                                    <option value="suffix55" label="Fall" />
                                    <option value="suffix56" label="Falls" />
                                    <option value="suffix57" label="Ferry" />
                                    <option value="suffix58" label="Field" />
                                    <option value="suffix59" label="Fields" />
                                    <option value="suffix60" label="Flat" />
                                    <option value="suffix61" label="Flats" />
                                    <option value="suffix62" label="Ford" />
                                    <option value="suffix63" label="Fords" />
                                    <option value="suffix64" label="Forest" />
                                    <option value="suffix65" label="Forge" />
                                    <option value="suffix66" label="Forges" />
                                    <option value="suffix67" label="Fork" />
                                    <option value="suffix68" label="Forks" />
                                    <option value="suffix69" label="Fort" />
                                    <option value="suffix70" label="Freeway" />
                                    <option value="suffix71" label="Garden" />
                                    <option value="suffix72" label="Gardens" />
                                    <option value="suffix73" label="Gateway" />
                                    <option value="suffix74" label="Glen" />
                                    <option value="suffix75" label="Glens" />
                                    <option value="suffix76" label="Green" />
                                    <option value="suffix77" label="Greens" />
                                    <option value="suffix78" label="Grove" />
                                    <option value="suffix79" label="Groves" />
                                    <option value="suffix80" label="Harbor" />
                                    <option value="suffix81" label="Harbors" />
                                    <option value="suffix82" label="Haven" />
                                    <option value="suffix83" label="Heights" />
                                    <option value="suffix84" label="Highway" />
                                    <option value="suffix85" label="Hill" />
                                    <option value="suffix86" label="Hills" />
                                    <option value="suffix87" label="Hollow" />
                                    <option value="suffix88" label="Inlet" />
                                    <option value="suffix89" label="Island" />
                                    <option value="suffix90" label="Islands" />
                                    <option value="suffix91" label="Isle" />
                                    <option value="suffix92" label="Junction" />
                                    <option value="suffix93" label="Junctions" />
                                    <option value="suffix94" label="Key" />
                                    <option value="suffix95" label="Keys" />
                                    <option value="suffix96" label="Knoll" />
                                    <option value="suffix97" label="Knolls" />
                                    <option value="suffix98" label="Lake" />
                                    <option value="suffix99" label="Lakes" />
                                    <option value="suffix100" label="Land" />
                                    <option value="suffix101" label="Landing" />
                                    <option value="suffix102" label="Lane" />
                                    <option value="suffix103" label="Light" />
                                    <option value="suffix104" label="Lights" />
                                    <option value="suffix105" label="Loaf" />
                                    <option value="suffix106" label="Lock" />
                                    <option value="suffix107" label="Locks" />
                                    <option value="suffix108" label="Lodge" />
                                    <option value="suffix109" label="Loop" />
                                    <option value="suffix110" label="Mall" />
                                    <option value="suffix111" label="Manor" />
                                    <option value="suffix112" label="Manors" />
                                    <option value="suffix113" label="Meadow" />
                                    <option value="suffix114" label="Meadows" />
                                    <option value="suffix115" label="Mews" />
                                    <option value="suffix116" label="Mill" />
                                    <option value="suffix117" label="Mills" />
                                    <option value="suffix118" label="Mission" />
                                    <option value="suffix119" label="Missions" />
                                    <option value="suffix120" label="Motorway" />
                                    <option value="suffix121" label="Mount" />
                                    <option value="suffix122" label="Mountain" />
                                    <option value="suffix123" label="Mountains" />
                                    <option value="suffix124" label="Mountin" />
                                    <option value="suffix125" label="Neck" />
                                    <option value="suffix126" label="Orchard" />
                                    <option value="suffix127" label="Oval" />
                                    <option value="suffix128" label="Overpass" />
                                    <option value="suffix129" label="Park" />
                                    <option value="suffix130" label="Parks" />
                                    <option value="suffix131" label="Parkway" />
                                    <option value="suffix132" label="Parkways" />
                                    <option value="suffix133" label="Pass" />
                                    <option value="suffix134" label="Passage" />
                                    <option value="suffix135" label="Path" />
                                    <option value="suffix136" label="Pike" />
                                    <option value="suffix137" label="Pine" />
                                    <option value="suffix138" label="Pines" />
                                    <option value="suffix139" label="Place" />
                                    <option value="suffix140" label="Plain" />
                                    <option value="suffix141" label="Plains" />
                                    <option value="suffix142" label="Plaza" />
                                    <option value="suffix143" label="Point" />
                                    <option value="suffix144" label="Points" />
                                    <option value="suffix145" label="Port" />
                                    <option value="suffix146" label="Ports" />
                                    <option value="suffix147" label="Prairie" />
                                    <option value="suffix148" label="Radial" />
                                    <option value="suffix149" label="Ramp" />
                                    <option value="suffix150" label="Ranch" />
                                    <option value="suffix151" label="Rapid" />
                                    <option value="suffix152" label="Rapids" />
                                    <option value="suffix153" label="Rest" />
                                    <option value="suffix154" label="Ridge" />
                                    <option value="suffix155" label="Ridges" />
                                    <option value="suffix156" label="River" />
                                    <option value="suffix157" label="Road" />
                                    <option value="suffix158" label="Road" />
                                    <option value="suffix159" label="Roads" />
                                    <option value="suffix160" label="Route" />
                                    <option value="suffix161" label="Row" />
                                    <option value="suffix162" label="Rue" />
                                    <option value="suffix163" label="Run" />
                                    <option value="suffix164" label="Shoal" />
                                    <option value="suffix165" label="Shoals" />
                                    <option value="suffix166" label="Shore" />
                                    <option value="suffix167" label="Shores" />
                                    <option value="suffix168" label="Skyway" />
                                    <option value="suffix169" label="Spring" />
                                    <option value="suffix170" label="Springs" />
                                    <option value="suffix171" label="Springs" />
                                    <option value="suffix172" label="Spur" />
                                    <option value="suffix173" label="Spurs" />
                                    <option value="suffix174" label="Square" />
                                    <option value="suffix175" label="Squares" />
                                    <option value="suffix176" label="Station" />
                                    <option value="suffix177" label="Station" />
                                    <option value="suffix178" label="Stravenue" />
                                    <option value="suffix179" label="Stravenue" />
                                    <option value="suffix180" label="Stream" />
                                    <option value="suffix181" label="Stream" />
                                    <option value="suffix182" label="Street" />
                                    <option value="suffix183" label="Street" />
                                    <option value="suffix184" label="Streets" />
                                    <option value="suffix185" label="Summit" />
                                    <option value="suffix186" label="Summit" />
                                    <option value="suffix187" label="Terrace" />
                                    <option value="suffix188" label="Throughway" />
                                    <option value="suffix189" label="Trace" />
                                    <option value="suffix190" label="Track" />
                                    <option value="suffix191" label="Trafficway" />
                                    <option value="suffix192" label="Trail" />
                                    <option value="suffix193" label="Tunnel" />
                                    <option value="suffix194" label="Tunnel" />
                                    <option value="suffix195" label="Turnpike" />
                                    <option value="suffix196" label="Turnpike" />
                                    <option value="suffix197" label="Underpass" />
                                    <option value="suffix198" label="Union" />
                                    <option value="suffix199" label="Unions" />
                                    <option value="suffix200" label="Valley" />
                                    <option value="suffix201" label="Valleys" />
                                    <option value="suffix202" label="Via" />
                                    <option value="suffix203" label="Viaduct" />
                                    <option value="suffix204" label="View" />
                                    <option value="suffix205" label="Views" />
                                    <option value="suffix206" label="Village" />
                                    <option value="suffix207" label="Village" />
                                    <option value="suffix208" label="Villages" />
                                    <option value="suffix209" label="Ville" />
                                    <option value="suffix210" label="Vista" />
                                    <option value="suffix211" label="Vista" />
                                    <option value="suffix212" label="Walk" />
                                    <option value="suffix213" label="Walks" />
                                    <option value="suffix214" label="Wall" />
                                    <option value="suffix215" label="Way" />
                                    <option value="suffix216" label="Well" />
                                    <option value="suffix217" label="Wells" />
                                    <option value="suffix218" label="West" />
                                    <option value="suffix219" label="Wester" />
                                    <option value="suffix220" label="Weser" />
                                    <option value="suffix221" label="Western" />
                                    <option value="suffix222" label="Western" />
                                    <option value="suffix223" label="Wharf" />
                                    <option value="suffix224" label="Whee" />
                                    <option value="suffix225" label="Wheel" />
                                    <option value="suffix226" label="Wheels" />
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
                                    <option value="suffix1" label="N" />
                                    <option value="suffix2" label="NE" />
                                    <option value="suffix3" label="NW" />
                                    <option value="suffix4" label="S" />
                                    <option value="suffix5" label="SE" />
                                    <option value="suffix6" label="SW" />
                                    <option value="suffix7" label="E" />
                                    <option value="suffix8" label="S" />
                                    <option value="suffix9" label="W" />
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
                                    <option value="state1" label="Alabama" />
                                    <option value="state2" label="Alaska" />
                                    <option value="state3" label="Arizona" />
                                    <option value="state4" label="Arkansas" />
                                    <option value="state5" label="California" />
                                    <option value="state6" label="Colorado" />
                                    <option value="state7" label="Connecticut" />
                                    <option value="state8" label="Delaware" />
                                    <option value="state9" label="District of Columbia" />
                                    <option value="state10" label="Florida" />
                                    <option value="state11" label="Georgia" />
                                    <option value="state12" label="Hawaii" />
                                    <option value="state13" label="Idaho" />
                                    <option value="state14" label="Illinois" />
                                    <option value="state15" label="Indiana" />
                                    <option value="state16" label="Iowa" />
                                    <option value="state17" label="Kansas" />
                                    <option value="state18" label="Kentucky" />
                                    <option value="state19" label="Louisiana" />
                                    <option value="state20" label="Maine" />
                                    <option value="state21" label="Maryland" />
                                    <option value="state22" label="Massachusetts" />
                                    <option value="state23" label="Michigan" />
                                    <option value="state24" label="Minnesota" />
                                    <option value="state25" label="Mississippi" />
                                    <option value="state26" label="Missouri" />
                                    <option value="state27" label="Montana" />
                                    <option value="state28" label="Nebraska" />
                                    <option value="state29" label="Nevada" />
                                    <option value="state30" label="New Hampshire" />
                                    <option value="state31" label="New Jersey" />
                                    <option value="state32" label="New Mexico" />
                                    <option value="state33" label="New York" />
                                    <option value="state34" label="North Carolina" />
                                    <option value="state35" label="North Dakota" />
                                    <option value="state36" label="Ohio" />
                                    <option value="state37" label="Oklahoma" />
                                    <option value="state38" label="Oregon" />
                                    <option value="state39" label="Pennsylvania" />
                                    <option value="state40" label="Rhode Island" />
                                    <option value="state41" label="South Carolina" />
                                    <option value="state42" label="South Dakota" />
                                    <option value="state43" label="Tennessee" />
                                    <option value="state44" label="Texas" />
                                    <option value="state45" label="Utah" />
                                    <option value="state46" label="Vermont" />
                                    <option value="state47" label="Virginia" />
                                    <option value="state48" label="Washington" />
                                    <option value="state49" label="West Virginia" />
                                    <option value="state50" label="Wisconsin" />
                                    <option value="state51" label="Wyoming" />
                                </select>
                            </div>
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
