// Navbar.js
import React, { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Assuming you have a separate CSS file for styling
import logo from '../assets/theIncognitaLogo.png'; 
import closeIcon from '../assets/closex.svg'; 

const Navbar = () => {
  const openNavMenu = useRef(null);
  const closeNavMenu = useRef(null);
  const navMenu = useRef(null);
  const menuOverlay = useRef(null);
  const mediaSize = 991;



  const toggleNav = () => {
    navMenu.current.classList.toggle('open');
    menuOverlay.current.classList.toggle('active');
    document.body.classList.toggle('hidden-scrolling');
  };

  const collapseSubMenu = () => {
    navMenu.current.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
    navMenu.current.querySelector('.menu-item-has-children.active').classList.remove('active');
  };

  const resizeFix = useCallback(() => {
    if (navMenu.current.classList.contains('open')) {
      toggleNav();
    }

    if (navMenu.current.querySelector('.menu-item-has-children.active')) {
      collapseSubMenu();
    }
    }, [navMenu]);
    
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > mediaSize) {
          resizeFix();
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [resizeFix]);

  const handleMenuClick = (event) => {
    if (event.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains('active')) {
        collapseSubMenu();
      } else {
        if (navMenu.current.querySelector('.menu-item-has-children.active')) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add('active');
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }
    }
  };


  

  return (
    <header className="header">
      <div className="container-header">
        <div className="header-main">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Incognita logo" />
            </Link>
          </div>
          <div className="open-nav-menu" ref={openNavMenu} onClick={toggleNav}>
            <span></span>
          </div>
          <div className="menu-overlay" ref={menuOverlay} onClick={toggleNav}></div>
          <nav className="nav-menu" ref={navMenu} onClick={handleMenuClick}>
            <div className="close-nav-menu" ref={closeNavMenu} onClick={toggleNav}>
              <img src={closeIcon} alt="close" />
            </div>
            <ul className="menu">
            <li className="menu-item">
                <Link to="/table-react">Table React</Link>
              </li>
            <li className="menu-item">
                <Link to="/table-ant">Table Ant</Link>
              </li>
            <li className="menu-item">
                <Link to="/table-chooser">Table Chooser</Link>
              </li>
              <li className="menu-item">
                <Link to="/roadmap">Roadmap</Link>
              </li>
              <li className="menu-item">
                <Link to="/dao">DAO</Link>
              </li>
              <li className="menu-item">
                <Link to="/token">Token</Link>
              </li>
              <li className="menu-item menu-item-has-children">
              <span data-toggle="sub-menu">Learn <i className="plus">&#43;</i></span>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link to="/learn/how-to-establish-a-network-state">
                      How to establish a network state
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/learn/podcasts">Podcasts</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;