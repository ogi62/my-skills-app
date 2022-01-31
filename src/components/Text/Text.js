import React from "react";
import "./Text.css";

const Text = ({ heading, paragraph }) => {
  return (
    <div className="textContainer">
      <h3 className="textContainer__heading">{heading}</h3>
      <p className="textContainer__paragraph">{paragraph}</p>
    </div>
  );
};

export default Text;
