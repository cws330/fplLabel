"use client";
import React from "react";

const AddTime = () => {
  let currentDate = Date.now();
  let dt = new Date();
  dt.setDate(dt.getDate() + 2);

  return (
    <div>
      {" "}
      <h2>
        {" "}
        Add Number of days to the JavaScript Date object using setDate( ) method{" "}
      </h2>
      <p> Click on the button to add 2 days to the current date/time.</p>
      <button onclick='add()'>Click Me</button>
      <p id='currentTime'>
        Current Date : {new Date(currentDate).toLocaleDateString()}
      </p>
      <p id='updatedTime'>Updated Date: {dt.toLocaleDateString()}</p>
    </div>
  );
};

export default AddTime;
