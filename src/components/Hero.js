import React from "react";
import hero from "../assets/theIncognitaHero.jpeg";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h1>The Incognita</h1>
            <h2>Mapping the most accurate stats for aspiring Network States</h2>
            <div className="cta-container">
            <Link to="/apply">
              <button className="cta-hero left" id="openPopup">
              Get Listed
                </button>
                </Link>
              <a href="https://discord.gg/EyvF2fEqWT" target="_blank" rel="noreferrer">
                <button className="cta-hero right">Join Discord</button>
              </a>
            </div>
          </div>
          <div className="hero-wrapper">
            <div className="hero-right hidden-mobile">
              <img src={hero} alt="TheIncognitaHero" />
            </div>
          </div>
        </section>
      </main>
    );
};
  
export default Hero;