// LinksExpanded.js.js
import React from "react";
import discordIcon from "../assets/discord60x60.png";
import twitterIcon from "../assets/twitter60x60.png";
import openseaIcon from "../assets/Opensea.png";
import Logos from "./Logos";

const LinksExpanded = ({ record }) => (
  <>
    <Logos record={record} />
    {record.Twitter && (
      <div id="expanded-icons">
        <a href={record.Twitter} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter link" id="social-icons" />
        </a>
        <p>{record.twitterFollowers}K followers</p>
      </div>
    )}
    {record.Discord && (
      <div id="expanded-icons">
        <a href={record.Discord} target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord link" id="social-icons" />
        </a>
        <p>{record.discordMembers}K members</p>
      </div>
    )}
    {record.Opensea && (
      <div id="expanded-icons">
        <a href={record.Opensea} target="_blank" rel="noopener noreferrer">
          <img src={openseaIcon} alt="Opensea link" id="social-icons" />
        </a>
        <p>{record.FloorPrice} ETH flor</p>
      </div>
    )}
  </>
);

export default LinksExpanded;
