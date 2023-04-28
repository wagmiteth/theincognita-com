import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import JoinDiscordButton from '../components/JoinDiscordButton';
// import './HomePage.css'; // Assuming you have a separate CSS file for styling

const DaoPage = () => {
    useDocumentTitle('DAO | The Incognita');
  return (
    <div className="dao-page">
       <div className="container-content">
      <h1>The Incognita DAO</h1>
            <p>
              The incognita is built by the community. If you believe in our
              vision to build the most accurate dashboard for aspiring Network
              States, you should join us.
              <br /><br />
              Say GM! in our Discord and start building with us.
        </p>
        < JoinDiscordButton />
        </div>
    </div>
  );
};

export default DaoPage;