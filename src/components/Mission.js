// Mission.js
import React from "react";

const Mission = ({ record, isExpanded, linksComponent }) => (
  <div className="Mission">
    <strong>{record.NodeName}</strong>
    <br />
    {isExpanded ? (
      <p>{record.expandedMission}</p>
    ) : (
      <>
        <p>{record.Mission}</p>
        {linksComponent}
      </>
    )}
  </div>
);

export default Mission;
