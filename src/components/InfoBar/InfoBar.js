import React from "react";
import "./InfoBar.css";
import closeIcon from "../../icons/closeIcon.png";
import sam from "../../icons/sam.png";
const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={sam} alt="online image" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img className="closeIcon" src={closeIcon}></img>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
