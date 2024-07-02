import React from "react";
import "./style.css";
import Navbar from "../Navigation";

const Dashbaord = () => {
  const test = {
    batch: "XII_GCT-14_IIT BATCH",
    startTime: "02 Jul 2024, 10:45 AM",
    loginDeadline: "02 Jul 2024, 01:45 PM",
    duration: "03 hr:00 min",
    classroom: "IIT 01",
  };
  return (
    <div>
      <Navbar />
      <div className="test_card_container">
        <div className="test-card">
          <h3>{test.batch}</h3>
          <div className="test-info">
            <div>
              <strong>Test Starts At</strong>
              <p>{test.startTime}</p>
            </div>
            <div>
              <strong>Login Deadline</strong>
              <p>{test.loginDeadline}</p>
            </div>
            <div>
              <strong>Test Duration</strong>
              <p>{test.duration}</p>
            </div>
            <div>
              <strong>Classroom</strong>
              <p>{test.classroom}</p>
            </div>
          </div>
          <button className="start-test-button">START TEST</button>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
