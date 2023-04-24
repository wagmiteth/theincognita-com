import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const DaoPage = () => {
    useDocumentTitle('DAO | The Incognita');
  return (
    <div className="dao-page">
      <h1>Dao</h1>
    </div>
  );
};

export default DaoPage;