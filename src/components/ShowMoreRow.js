// ShowMoreRow.js 
import React from "react";

const ShowMoreRow = ({ record }) => {
  if (!record || !record.Base) {
    return null;
  }

  let baseArray = record.Base.split(",");
  let modifiedBase = baseArray.map((base) => {
    base = base.trim();
    if (base.includes("Africa")) {
      return base.replace("Africa", "🌍 Africa");
    } else if (base.includes("Global")) {
      return base.replace("Global", "🛬 Global");
    } else if (base.includes("North America")) {
      return base.replace("North America", "🌎 North America");
    } else if (base.includes("Latin America")) {
      return base.replace("Latin America", "💃 Latin America");
    } else if (base.includes("Europe")) {
      return base.replace("Europe", "🇪🇺 Europe");
    } else if (base.includes("Asia")) {
      return base.replace("Asia", "🀄 Asia");
    } else if (base.includes("US")) {
      return base.replace("US", "🇺🇸 US");
    } else if (base.includes("Honduras")) {
      return base.replace("Honduras", "🇭🇳 Honduras");
    } else if (base.includes("Palau")) {
      return base.replace("Palau", "🇵🇼 Palau");
    } else if (base.includes("Oceania")) {
      return base.replace("Oceania", "🏄🏼‍♂️ Oceania");
    } else if (base.includes("Vanuatu")) {
      return base.replace("Vanuatu", "🇻🇺 Vanuatu");
    } else if (base.includes("Singapore")) {
      return base.replace("Singapore", "🇸🇬 Singapore");
    } else if (base.includes("Nigeria")) {
      return base.replace("Nigeria", "🇳🇬 Nigeria");
    } else {
      return base;
    }
  });

  if (modifiedBase) {
    return (
      <div className="extended-section">
        <div className="base">
          <h4>Base</h4>
          {modifiedBase.map((base, index) => (
            <p key={index}>{base}</p>
          ))}
        </div>
        <div>
          <h4>Links</h4>
            <a href={record.Link} target="_blank" rel="noopener noreferrer">
              Website
            </a>{" "}
            {record.Twitter && (
              <>
                <br />
                <a
                  href={record.Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{" "}
                <p>followers:</p> {record.twitterFollowers}
                <p>K</p>
              </>
            )}{" "}
            <br />
            {record.Discord && (
              <>
                <a
                  href={record.Discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>{" "}
                <p>members:</p> {record.discordMembers}
                <p>K</p>
              </>
            )}
          </div>
          <div>
            <h4>Tokens</h4>
            {record.Opensea && (
              <a
                href={
                  record.Marketplace === "blur.io"
                    ? record.Blur
                    : record.Opensea
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {record.Marketplace}
              </a>
            )}{" "}
            {record.Opensea && (
              <>
                <p>floor:</p> {record.FloorPrice}
                <p>ETH</p>
              </>
            )}
          </div>
        </div>
    );
  } else {
    return null;
  }
};

export default ShowMoreRow;