// BasesExpanded.js 
import React from "react";
import ApplicationButton from "./ApplicationButton";


const BasesExpanded = ({ record }) => {
  if (!record || !record.Base) {
    return null;
  }

  let baseArray = record.Base.split(",");
  let modifiedBase = baseArray.map((base, index) => {
    base = base.trim();
    if (base.includes("Africa")) {
      return <><span key={index} className='emoji'>🌍</span><p>Africa</p></>;
    } else if (base.includes("Global")) {
      return <><span key={index} className='emoji'>🛬</span><p>Global</p></>;
    } else if (base.includes("North America")) {
      return <><span key={index} className='emoji'>🌎</span><p>North America</p></>;
    } else if (base.includes("Latin America")) {
      return <><span key={index} className='emoji'>💃</span><p>Latin America</p></>;
    } else if (base.includes("Europe")) {
      return <><span key={index} className='emoji'>🇪🇺</span><p>Europe</p></>;
    } else if (base.includes("Asia")) {
      return <><span key={index} className='emoji'>🀄</span><p>Asia</p></>;
    } else if (base.includes("US")) {
      return <><span key={index} className='emoji'>🇺🇸</span><p>US</p></>;
    } else if (base.includes("Honduras")) {
      return <><span key={index} className='emoji'>🇭🇳</span><p>Honduras</p></>;
    } else if (base.includes("Palau")) {
      return <><span key={index} className='emoji'>🇵🇼</span><p>Palau</p></>;
    } else if (base.includes("Oceania")) {
      return <><span key={index} className='emoji'>🏄🏼‍♂️</span><p>Oceania</p></>;
    } else if (base.includes("Vanuatu")) {
      return <><span key={index} className='emoji'>🇻🇺</span><p>Vanuatu</p></>;
    } else if (base.includes("Singapore")) {
      return <><span key={index} className='emoji'>🇸🇬</span><p>Singapore</p></>;
    } else if (base.includes("Nigeria")) {
      return <><span key={index} className='emoji'>🇳🇬</span><p>Nigeria</p></>;
    } else {
      return <p>{base}</p>;
    }
  });
  
  

  if (modifiedBase) {
    return (
<div className="base" style={{ margin: "5px" }}>
  {modifiedBase.map((base, index) => (
    <div key={index} style={{ margin: "1px" }}>{base}</div>
  ))}
  <ApplicationButton record={record} id="JoinExpanded" />
</div>
    );
  } else {
    return null;
  }
};

export default BasesExpanded;