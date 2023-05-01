// HomePage.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../pages/css/HomePage.css"; // Assuming you have a separate CSS file for styling
import "../App.css";
import AirtableData from "../components/AirtableData";
import Hero from "../components/Hero";

const HomePage = () => {
  useDocumentTitle(
    "The Incognita | Network state mapping | Most accurate stats"
  );

  return (
    <div className="home-page">
      <main className="container">
        <Hero />
        <AirtableData />
      </main>
    </div>
  );
};
export default HomePage;
