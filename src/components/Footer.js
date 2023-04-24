import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <p>theingcognita.com</p>
          <p>
            Made with love ❤️ by the community
            <br />
            Contribute at{' '}
            <a href="https://github.com/wagmiteth/theIncognita.github.io" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
