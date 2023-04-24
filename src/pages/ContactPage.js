import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const ContactPage = () => {
  useDocumentTitle('Contact | The Incognita');
  return (
    <div className="dao-page">
      <h1>Contact</h1>
    </div>
  );
};

export default ContactPage;