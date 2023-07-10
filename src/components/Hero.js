import React from "react";
import hero from "../assets/theIncognitaHero.jpeg";
import JoinDiscordButtonHomepage from "./JoinDiscordButtonHomepage";
import GetListedButton from "./GetListedButton";

const Hero = () => {
    return (

        <section className="hero">
          <div className="hero-left">
            <h1>The Incognita</h1>
            <h2>Mapping the most accurate stats for aspiring Network States</h2>
            <div className="cta-container">
           <GetListedButton />
                <JoinDiscordButtonHomepage />
            </div>
          </div>
          <div className="hero-wrapper">
            <div className="hero-right hidden-mobile">
              <img src={hero} alt="TheIncognitaHero" />
            </div>
          </div>
        </section>
    );
};
  
export default Hero;