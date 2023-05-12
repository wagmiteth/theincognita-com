// SocialIcons.js 
import React from 'react';
import linkIcon from "../assets/link60x60.png";
import twitterIcon from "../assets/twitter60x60.png";
import discordIcon from "../assets/discord60x60.png";
import openseaIcon from "../assets/Opensea.png";

const SocialIcons = ({ record }) => {
  return (
    <>
      {record.Link && (
        <a href={record.Link} target="_blank" rel="noopener noreferrer">
          <img src={linkIcon} alt="Link website" id="social-icons" />
        </a>
      )}
      {record.Twitter && (
        <a href={record.Twitter} target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter link" id="social-icons" />
        </a>
      )}
      {record.Discord && (
        <a href={record.Discord} target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord link" id="social-icons" />
        </a>
      )}
      {record.Opensea && (
        <a href={record.Opensea} target="_blank" rel="noopener noreferrer">
          <img src={openseaIcon} alt="Opensea link" id="social-icons" />
        </a>
      )}
    </>
  );
};

export default SocialIcons;
