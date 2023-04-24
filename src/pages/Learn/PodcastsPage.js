import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const PodcastsPage = () => {
  useDocumentTitle('Podcasts | The Incognita');
  return (
    <div className="Podcasts-page">
      <h1>Podcasts</h1>
    </div>
  );
};

export default PodcastsPage;