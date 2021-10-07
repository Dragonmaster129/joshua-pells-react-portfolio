import React from "react";
import contactPicture from "../../../static/assets/images/auth/login-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="info-wrapper">
          <div className="phone-wrapper">
            <FontAwesomeIcon icon="phone-alt" className="phone icon" />
            <p>(555)-555-5555</p>
          </div>
          <div className="email-wrapper">
            <FontAwesomeIcon icon="envelope" className="email icon" />
            <p>something@something.com</p>
          </div>
          <div className="address-wrapper">
            <FontAwesomeIcon icon="map-marked" className="address icon" />
            <p>somewhere, somewhere, someplace</p>
          </div>
        </div>
      </div>
    </div>
  );
}
