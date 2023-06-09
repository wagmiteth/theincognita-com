// HomePage.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../pages/css/HomePage.css"; // Assuming you have a separate CSS file for styling
import "../App.css";
// import TableHomepage from "../components/TableHomepage";
import Hero from "../components/Hero";
import TableReactPage from "./TableReactPage";




const HomePage = () => {
  useDocumentTitle(
    "The Incognita | Network state mapping | Most accurate stats"
  );

  return (
    <div className="home-page">
      <main className="container">
        <Hero />
        <TableReactPage />
      </main>
    </div>
  );
};
export default HomePage;
