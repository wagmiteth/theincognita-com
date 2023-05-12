// TableRow.js 
import React, { useState } from "react";
import questionSign from "../assets/nodeIcons/questionSign60x60.png";
import SocialIcons from "./SocialIcons";
import ShowMoreRow from "./ShowMoreRow";

const TableRow = ({ record }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <tr className="first">
        <td className="td-left-corners">
          <a href={record.Link} target="_blank" rel="noopener noreferrer">
            <img src={record.imageUrl || questionSign} alt={record.Name} />
          </a>
        </td>
        <td>
          <a href={record.Link} target="_blank" rel="noopener noreferrer">
            <h4>{record.NodeName}</h4>
          </a>
          <p>{record.Mission}</p>&nbsp;
          <span
            onClick={toggleShowMore}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {showMore ? "Hide more" : "Show more"}
          </span>
          <br />
          <SocialIcons record={record} />
          <br />
         <ShowMoreRow showMore={showMore} record={record} />
        </td>
        <td>
          <a href={record.Link} target="_blank" rel="noopener noreferrer">
            <h4>{record.NodeName}</h4>
          </a>
        </td>
        <td>
          <p>{record.Mission}</p>&nbsp;
          <span
            onClick={toggleShowMore}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {showMore ? "Hide more" : "Show more"}
          </span>
          <br />
          <ShowMoreRow showMore={showMore} record={record} />

        </td>
        <td>
          <SocialIcons record={record} />
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
    </>
  );
};

export default TableRow;
