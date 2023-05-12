// ShowMoreRow.js
import React from "react";

const ShowMoreRow = ({ showMore, record }) => {
  return (
    <>
      {showMore && (
        <tr>
          <div colSpan="6" className="extended-section">
              {/* Add the content for the extended section here */}
              <a href={record.Link} target="_blank" rel="noopener noreferrer">
                Website
              </a>{" "}
              {record.Twitter && (
                <>
                  {" "}
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
              {record.Discord && (
                <>
                  <br />
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
              {record.Opensea && (
                <>
                  <br />
                  <a
                    href={record.Opensea}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OpenSea
                  </a>{" "}
                  <p>floor price:</p> {record.openseaFloor}
                  <p>ETH</p>
                </>
              )}
            </div>
        </tr>
      )}
    </>
  );
};

export default ShowMoreRow;
