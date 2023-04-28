import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import JoinDiscordButton from '../components/JoinDiscordButton';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const ContactPage = () => {
  useDocumentTitle('Contact | The Incognita');
  return (
    <div className="dao-page">
      <div className="container-content">
        <h1>Contact</h1>
            <p>Email us at <a href="mailto:hello@wagmi.se" target="_blank" rel="noreferrer">hello@wagmi.se</a></p>
        Or
        < JoinDiscordButton />
      </div>
    </div>
  );
};

export default ContactPage;