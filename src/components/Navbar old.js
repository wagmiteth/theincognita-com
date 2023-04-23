// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a separate CSS file for styling
import logo from '../assets/theIncognitaLogo.png'; // Assuming the image is in the same folder
import closeIcon from '../assets/closex.svg'; // Assuming the image is in the same folder

const Navbar = () => {
  return (
    <header className="header">
      <div className="container-header">
        <div className="header-main">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Incognita logo" />
            </a>
          </div>
          <div className="open-nav-menu">
            <span></span>
          </div>
          <div className="menu-overlay"></div>
          <nav className="nav-menu">
            <div className="close-nav-menu">
              <img src={closeIcon} alt="close" />
            </div>
            <ul className="menu">
              <li className="menu-item"><Link to="/roadmap">Roadmap</Link></li>
              <li className="menu-item"><Link to="/dao">DAO</Link></li>
              <li className="menu-item"><Link to="/token">Token</Link></li>
              <li className="menu-item menu-item-has-children">
                <Link to="/learn/learn-how-to-establish-a-network-state" data-toggle="sub-menu">
                  Learn <i className="plus"></i>
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/learn/learn-how-to-establish-a-network-state">
                      How to establish a network state
                    </Link>
                  </li>
                  <li className="menu-item"><Link to="#">Podcasts</Link></li>
                </ul>
              </li>
              <li className="menu-item"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
