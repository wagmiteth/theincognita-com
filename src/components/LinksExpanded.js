// LinksExpanded.js.js
import React from "react";
import Badge from '@mui/material/Badge';
import discordIcon from "../assets/discord60x60.png";
import linkIcon from "../assets/link60x60.png";
import twitterIcon from "../assets/twitter60x60.png";
import openseaIcon from "../assets/Opensea.png";
import Logos from "./Logos";


const LinksExpanded = ({ record }) => (
  <div className="LinksExpanded">
    <Logos record={record} />
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
      <a href={record.Opensea} target="_blank" rel="noopener noreferrer" style={{ position: 'relative' }}>
        <Badge badgeContent={`${record.FloorPrice}Ξ`} color="secondary"  anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
          <img src={openseaIcon} alt="Opensea link" id="social-icons" />
        </Badge>
      </a>
    )}
  </div>
);

export default LinksExpanded;
