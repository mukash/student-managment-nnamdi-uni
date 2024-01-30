// NoRecordsFound.js
import React from "react";

const NoRecordsFound: React.FC = () => {
  return (
    <div className="no-records">
      <p className="no-records-text">No records found</p>
      <div className="animation-container">
        <div className="animation-bar"></div>
        <div className="animation-bar"></div>
        <div className="animation-bar"></div>
      </div>
    </div>
  );
};

export default NoRecordsFound;
