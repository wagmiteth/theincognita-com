// Mission.js
import React from "react";

const Mission = ({ record, isExpanded, linksComponent }) => (
  <div className="Mission">
    <strong>{record.NodeName}</strong>
    <br />
    {isExpanded ? (
      <>
        <p>{record.expandedMission}</p>
        <div className="JoinExpanded-container">
        </div>
      </>
    ) : (
      <div className="MissionContent">
        <p>{record.Mission}</p>
        {linksComponent}

      </div>
    )}
  </div>
);

export default Mission;
