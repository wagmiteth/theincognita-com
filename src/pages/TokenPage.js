import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const TokenPage = () => {
  useDocumentTitle('Token | Incentive structure | The Incognita');
  return (
    <div className="token-page">
      <h1>Token</h1>
    </div>
  );
};

export default TokenPage;