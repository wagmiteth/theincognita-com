// AirtableData.js
import React, { useState, useEffect } from "react";
import base from "../Airtable";
import portaNorte from "../assets/nodeIcons/porta-norte.png";
import "./css/AirtableData.css";
import linkIcon from "../assets/link60x60.png";
import twitterIcon from "../assets/twitter60x60.png";
import discordIcon from "../assets/discord60x60.png";

const AirtableData = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await base("ListOfNodes").select().all();
        setRecords(response.map((record) => record.fields));
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
                <img src={portaNorte} alt={record.Name} />
              </a>
            </td>
            <td>
              <a href={record.Link} target="_blank" rel="noopener noreferrer">
                <h4>{record.NodeName}</h4>
              </a>
              <p>{record.Mission}</p>
              <br />
              <a href="{record.Link}" target="_blank" rel="noopener noreferrer">
                <img src={linkIcon} alt="Link website" id="social-icons" />
              </a>
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
                <a href="{record.Link}" target="_blank" rel="noopener noreferrer">
                <img src={linkIcon} alt="Link website" id="social-icons" />
              </a>
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
            </td>
            {/* ... (add more table cells with Airtable data as needed) */}
            <td className="td-right-corners">
              <a
                href={record.Application}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cta">Join</button>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AirtableData;
