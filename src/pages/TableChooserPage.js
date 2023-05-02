// TableChooserPage.js
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../pages/css/HomePage.css"; // Assuming you have a separate CSS file for styling
import "../App.css";
import TableChooser from "../components/TableChooser";


const TableChooserPage = () => {
  useDocumentTitle(
    "The Incognita | Network state mapping | Most accurate stats"
  );

  return (
    <div className="home-page">
      <main className="container">
   
        <TableChooser />

      </main>
    </div>
  );
};
export default TableChooserPage;
