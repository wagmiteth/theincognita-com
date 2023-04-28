import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import JoinDiscordButton from '../components/JoinDiscordButton';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const TokenPage = () => {
  useDocumentTitle('Token | Incentive structure | The Incognita');
  return (
    <div className="token-page">
      <div className="container-content">
       <h1>Token</h1>
            <p>To be announced. Join Discord to stay updated! 👋</p>
      <JoinDiscordButton />
      </div>
      </div>
  );
};

export default TokenPage;