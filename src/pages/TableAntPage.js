// TableAntPage.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../pages/css/HomePage.css"; // Assuming you have a separate CSS file for styling
import "../App.css";
import TableAnt from "../components/TableAnt";

const TableAntPage = () => {
  useDocumentTitle(
    "The Incognita | Network state mapping | Most accurate stats"
  );

  return (
    <div className="home-page">
      <main className="container">
           
        <TableAnt />
      </main>
    </div>
  );
};
export default TableAntPage;
