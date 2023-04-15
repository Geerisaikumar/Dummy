import React from "react";

export const Watchpagedetails = ({ details }) => {
  console.log(details[0]);

  const { contentDetails, snippet } = details;
  console.log(snippet);
  return (
    <div className="text-3xl p-7">
      <ul>
        <li>Hello Gabbar</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Watchpagedetails;
