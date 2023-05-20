// ApplicationButton.js
import React from "react";

const ApplicationButton = ({ record }) => (
    record.Application ? (
        <a
          href={record.Application}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta">JOIN</button>
        </a>
    ) : null
);
  
export default ApplicationButton;
