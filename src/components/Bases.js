// Bases.js 
import React from "react";
import ApplicationButton from "./ApplicationButton";


const Bases = ({ record }) => {
  if (!record || !record.Base) {
    return null;
  }

  let baseArray = record.Base.split(",");
  let modifiedBase = baseArray.map((base) => {
    base = base.trim();
    if (base.includes("Africa")) {
      return <span id='emoji'>🌍</span>;
    } else if (base.includes("Global")) {
      return <span id='emoji'>🛬</span>;
    } else if (base.includes("North America")) {
      return <span id='emoji'>🌎</span>;
    } else if (base.includes("Latin America")) {
      return <span id='emoji'>💃</span>;
    } else if (base.includes("Europe")) {
      return <span id='emoji'>🇪🇺</span>;
    } else if (base.includes("Asia")) {
      return <span id='emoji'>🀄 </span>;
    } else if (base.includes("US")) {
      return <span id='emoji'>🇺🇸</span>;
    } else if (base.includes("Honduras")) {
      return <span id='emoji'>🇭🇳</span>;
    } else if (base.includes("Palau")) {
      return <span id='emoji'>🇵🇼</span>;
    } else if (base.includes("Oceania")) {
      return <span id='emoji'>🏄🏼‍♂️</span>;
    } else if (base.includes("Vanuatu")) {
      return <span id='emoji'>🇻🇺</span>;
    } else if (base.includes("Singapore")) {
      return <span id='emoji'>🇸🇬</span>;
    } else if (base.includes("Nigeria")) {
      return <span id='emoji'>🇳🇬</span>;
    } else {
      return base;
    }
  });
  
  

  if (modifiedBase) {
    return (
       <div className="base" style={{ display: "flex", flexDirection: "row" }}>
  {modifiedBase.map((base, index) => (
    <div key={index} style={{ margin: "2px" }}>{base}</div>
  ))}
  <ApplicationButton record={record} id="JoinExpanded" />
</div>

    );
  } else {
    return null;
  }
};

export default Bases;