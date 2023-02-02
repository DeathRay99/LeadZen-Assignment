import React from "react";
import "./MoreDetails.css";

function MoreDetails({ catchphrase, contact, address, username, email, phone }) {
  return (
    <div className="container">
      <h4 className="subheading">Catch-Phrase</h4>
      <p>{`${catchphrase}`}</p>
      <div className="detailsWrapper">
        <div>
          <h4 className="subheading">Contact person</h4>
          <p>{contact}</p>
        </div>
        <div>
          <h4 className="subheading">Address</h4>
          <p>{`${address.suite} ${address.street} ${address.city} ${address.zipcode}`}</p>
        </div>
        <div>
          <h4 className="subheading">UserName</h4>
          <p>{username}</p>
        </div>
        <div>
          <h4 className="subheading">City</h4>
          <p>{address.city}</p>
        </div>
        <div>
          <h4 className="subheading">Emails</h4>
          <p>{email}</p>
        </div>
        <div>
          <h4 className="subheading">Street</h4>
          <p>{address.street}</p>
        </div>
        <div>
          <h4 className="subheading">Phones</h4>
          <p>{phone}</p>
        </div>
        <div>
          <h4 className="subheading">Geo</h4>
          <p>{`lat: ${address.geo.lat}, lng: ${address.geo.lng}`}</p>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
