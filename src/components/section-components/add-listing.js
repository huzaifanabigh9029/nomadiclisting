import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Select } from "antd";

function AddListing() {
  //   let publicUrl = process.env.PUBLIC_URL + "/";
  const dir = useSelector((state) => state.dir);
  const [selected, setSelect] = useState("");
  const handleChange = (value) => {
    setSelect(value);
  };
  return (
    <div className="ltn__appointment-area pb-120">
      <div className="container" dir={dir}>
        <div className="row">
          <div className="col-lg-12">
            <div className="car-dealer-form-inner">
              <h2>1. Description</h2>
              <p>
                <small>
                  {/* These fields are mandatory: Title, Property Media */}
                </small>
              </p>
              <form className="ltn__car-dealer-form-box row">
                <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-12 col-md-6">
                  <select
                    className="costum-select"
                    id="selected"
                    value={selected}
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  >
                    <option value="CHOOSE A CATEGORY">CHOOSE A CATEGORY</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Property for Sale">Property for Sale</option>
                    <option>Property for Rent</option>
                    <option>Electronics & Home Appliances</option>
                    <option>Bikes</option>
                    <option>Business, Industrial & Agriculture</option>
                    <option>Animals</option>
                    <option>Furniture & Home Decor</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="ltn__appointment-inner">
              <form action="#">
                <h6>Description</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="*Title (mandatory)"
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="ltn__message"
                        placeholder="Description"
                        defaultValue={""}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h6>Price</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Price in $ (only numbers)"
                      />
                    </div>
                  </div>
                </div>
                <h6>Product Detail's</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="car-dealer-form-inner">
                    <form action="#" className="ltn__car-dealer-form-box row">
                      <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-12 col-md-6">
                        <select className="nice-select">
                          <option>Conditon</option>
                          <option>New</option>
                          <option>Open Box</option>
                          <option>Used</option>
                          <option>Refurbished</option>
                          <option>Not Working</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <h2>2. Media</h2>
                <h6>Listing Media</h6>
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="btn theme-btn-3 mb-10"
                />
                <br />
                <p>
                  <small>
                    * At least 1 image is required for a valid
                    submission.Minimum size is 500/500px.
                  </small>
                  <br />
                  <small>* PDF files upload supported as well.</small>
                  <br />
                  <small>* Images might take longer to be processed.</small>
                </p>
                {/* <h6>Video Option</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item">
                      <select className="nice-select">
                        <option>Video from</option>
                        <option>vimeo</option>
                        <option>youtube</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Embed Video ID"
                      />
                    </div>
                  </div>
                </div> 
                <h6>Virtual Tour</h6>
                <div className="input-item input-item-textarea ltn__custom-icon">
                  <textarea
                    name="ltn__message"
                    placeholder="Virtual Tour:"
                    defaultValue={""}
                  />
                </div> */}
                <h2>3. Location</h2>
                <h6>Listing Location</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="*Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="City" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="property-details-google-map mb-60">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                      />
                    </div>
                  </div>
                </div>
                <h2>REVIEW YOUR DETAILS</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input type="text" name="ltn__name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Phone Number (*only numbers)"
                      />
                    </div>
                  </div>
                </div>
                {/* <h2>5. Amenities</h2>
                <h6>Amenities and Features</h6>
                <h6>Interior Details</h6>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <label className="checkbox-item">
                      Equipped Kitchen
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div> */}
                <div className="alert alert-warning d-none" role="alert">
                  Please note that the date and time you requested may not be
                  available. We will contact you to confirm your actual
                  appointment details.
                </div>
                <div className="btn-wrapper text-center mt-30">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Post Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
