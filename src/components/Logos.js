import React from "react";
import questionSign from "../assets/nodeIcons/questionSign60x60.png";

const Logos = ({ record }) => (
  <a href={record.Link}  target="_blank" rel="noopener noreferrer">
    <img src={record.imageUrl || questionSign} id="logos" alt={record.Name} />
  </a>
);

export default Logos;
