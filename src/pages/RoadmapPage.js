import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const RoadmapPage = () => {
  useDocumentTitle('Roadmap | How we can grow as DAO | The Incognita');
  return (
    <div className="roadmap-page">
      <h1>Roadmap</h1>
    </div>
  );
};

export default RoadmapPage;