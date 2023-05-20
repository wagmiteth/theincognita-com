// TableChooser.js 
import React, { useState, useEffect } from "react";
import base from "../Airtable";
// import "./css/Multiselect.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const TableChooser = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await base("ListOfNodes").select().all();
        setRecords(
          response.map((record) => ({
            ...record.fields,
            imageUrl: record.fields.Logo ? record.fields.Logo[0].url : null,
          }))
        );
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };
    fetchRecords();
  }, []);

  return (
    <>
      <TableHeader count={records.length} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Column 2</th>
            <th></th>
            <th>Mission</th>
            <th>Links</th>
            <th className="text-right">Application</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <TableRow key={index} record={record} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableChooser;
