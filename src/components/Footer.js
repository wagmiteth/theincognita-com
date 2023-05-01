import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <p>theingcognita.com</p>
          <br />
          <p>
            Made with love ❤️ by the community
            <br />
            Contribute at{' '}
            <a href="https://github.com/wagmiteth/theincognita-com" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
