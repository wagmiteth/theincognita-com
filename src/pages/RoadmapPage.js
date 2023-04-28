import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import JoinDiscordButton from "../components/JoinDiscordButton";
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const RoadmapPage = () => {
  useDocumentTitle("Roadmap | How we can grow as DAO | The Incognita");
  return (
    <div className="roadmap-page">
      <div className="container-content">
        <h1>The Incognita roadmap</h1>
        <h2>1. Claiming 1 commandment, brand and identity.</h2>
        <p>✅ Establish domains and socials</p>
        <p>✅ Website 1.0</p>
        <p>✅ Community Discord</p>
        <h2>2. Build recognition</h2>
        <p>-Comminicate with nodes</p>
        <p>-Website content</p>
        <p>-Social content</p>
        <h2>3. 1:st edition NFT drop</h2>
        <p>-20 NFT’s of 0,1 ETH each</p>
        <h2>4. Community</h2>
        <p>-Recruit</p>
        <p>-Online meetups</p>
        <h2>5. Scale</h2>
        <p>-Community token</p>
        <p>-Bounties</p>
        <h2>6. Crowdfund funds</h2>
        <h2>7. Website 2.0</h2>
        <p>-WEB3 login</p>
        <p>-Sorting mechanisms for nodes</p>
        <p>-Live integrated node stats</p>
        <JoinDiscordButton />
      </div>
    </div>
  );
};

export default RoadmapPage;
