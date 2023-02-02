import React, { useEffect, useState } from "react";
import "./BasicInfo.css";
import MoreDetails from "./MoreDetails";
function BasicInfo({ company, contact, city, state, catchphrase, address, username, email, phone }) {
    // const [btn,setBtn]=useState("View deatils");
    const [expand,setExpand]=useState(false);
    function handleClick(){
        setExpand(prev=>!prev);
    }

  return (
    <div className="list-item">
      <div className="list-item-content">
        <span>{company}</span>
        <div>
          <p
            style={{
              fontWeight: "bolder",
            }}
          >
            CONTACT
          </p>
          <p>{contact}</p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bolder",
            }}
          >
            CITY
          </p>
          <p>{city}</p>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bolder",
            }}
          >
            STREET
          </p>
          <p>{state}</p>
        </div>
        <button onClick={handleClick}>{expand===false?"View Details":"Hide Details"}</button>
      </div>
      {expand&&<MoreDetails catchphrase={catchphrase} contact={contact}
      address={address}
      username={username}
      email={email}
      phone={phone}/>}
    </div>
  );
}

export default BasicInfo;
