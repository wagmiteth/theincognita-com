// AirtableData.js
import React, { useState, useEffect } from "react";
import base from "../Airtable";
import questionSign from "../assets/nodeIcons/questionSign60x60.png";
import "./css/AirtableData.css";
import linkIcon from "../assets/link60x60.png";
import twitterIcon from "../assets/twitter60x60.png";
import discordIcon from "../assets/discord60x60.png";
import openseaIcon from "../assets/Opensea.png";

const AirtableData = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await base("ListOfNodes").select().all();
        setRecords(
          response.map((record) => ({
            ...record.fields,
            imageUrl: record.fields.Logo ? record.fields.Logo[0].url : null,
          }))
        );
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Column 2</th>
          <th></th>
          <th>Mission</th>
          <th>Links</th>
          <th className="text-right">Application</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr key={index}>
            <td className="td-left-cornsers">
              <a href={record.Link} target="_blank" rel="noopener noreferrer">
                <img src={record.imageUrl || questionSign} alt={record.Name} />
              </a>
            </td>
            <td>
              <a href={record.Link} target="_blank" rel="noopener noreferrer">
                <h4>{record.NodeName}</h4>
              </a>
              <p>{record.Mission}</p>
              <br />
              {record.Link && (
                <a href={record.Link} target="_blank" rel="noopener noreferrer">
                  <img src={linkIcon} alt="Link website" id="social-icons" />
                </a>
              )}
              {record.Twitter && (
                <a
                  href={record.Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twitter link" id="social-icons" />
                </a>
              )}
              {record.Discord && (
                <a
                  href={record.Discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={discordIcon} alt="Discord link" id="social-icons" />
                </a>
              )}
              {record.Opensea && (
                <a
                  href={record.Opensea}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={openseaIcon} alt="Opensea link" id="social-icons" />
                </a>
              )}
            </td>
            <td>
              <a href={record.Link} target="_blank" rel="noopener noreferrer">
                <h4>{record.NodeName}</h4>
              </a>
            </td>
            <td>
              <p>{record.Mission}</p>
            </td>
            <td>
              {record.Link && (
                <a href={record.Link} target="_blank" rel="noopener noreferrer">
                  <img src={linkIcon} alt="Link website" id="social-icons" />
                </a>
              )}
              {record.Twitter && (
                <a
                  href={record.Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="Twitter link" id="social-icons" />
                </a>
              )}
              {record.Discord && (
                <a
                  href={record.Discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={discordIcon} alt="Discord link" id="social-icons" />
                </a>
                    )}
                    {record.Opensea && (
                <a
                  href={record.Opensea}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={openseaIcon} alt="Opensea link" id="social-icons" />
                </a>
              )}
            </td>
            <td className="text-right">
            {record.Application && (
                    <a
                href={record.Application}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cta">Join</button>
                        </a>
                    )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AirtableData;
