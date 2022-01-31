import React from "react";
import "./Bio.css";
import Candidate from "../../assets/picture.JPG";

const Bio = () => {
  return (
    <div className="bio">
      <div className="bio__information">
        <img className="candidate__picture" src={Candidate} alt="candidate" />
        <div className="candidate__bio">
          <h5 className="candidate__name">Ognjen</h5>
          <h5 className="candidate__lastName">Dangubic</h5>
        </div>
      </div>
      <div className="bio__contact">
        <li>Contact</li>
        <li>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLqDcdKDgZrkwkrMSZDRZfPKJBwrmcldDVKDFgFCsPZScGbxzJnTBTzXckGkJNprbqNpg"
            target="_blank"
          >
            G-mail
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ognjen-dangubic-769759224/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/ogi62" target="_blank">
            Github
          </a>
        </li>
      </div>
    </div>
  );
};

export default Bio;
