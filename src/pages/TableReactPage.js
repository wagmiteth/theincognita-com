// TableReactPage.js
import React, { useState, useEffect } from "react";
import "./css/TableReact.css";
import base from "../Airtable";
import TableReact from "../components/TableReact";
import ApplicationButton from "../components/ApplicationButton";
import Links from "../components/Links";
import Logos from "../components/Logos";
import Mission from "../components/Mission";
import LinksExpanded from "../components/LinksExpanded";

const TableReactPage = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await base("ListOfNodes").select().all();
        setRecords(
          response.map((record) => ({
            ...record.fields,
            key: record.id, // Assuming record.id is unique
            imageUrl: record.fields.Logo ? record.fields.Logo[0].url : null,
          }))
        );
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };
    fetchRecords();
  }, []);

  const columns = [
    {
      Header: "Logos",
      accessor: "Logos",
      Cell: ({ row }) => (
        <div className="logo-links-container">
          {!row.isExpanded && <Logos record={row.original} />}
          {!row.isExpanded && <Links record={row.original} />}
          {row.isExpanded && <LinksExpanded record={row.original} />}
        </div>
      ),
    },
    {
      Header: "Mission",
      accessor: "Mission",
      Cell: ({ row }) => (
        <Mission record={row.original} isExpanded={row.isExpanded} />
      ),
    },
    {
      Header: "Application",
      accessor: "Application",
      Cell: ({ row }) => <ApplicationButton record={row.original} />,
    },
  ];

  return (
    <div className="home-page">
      <main className="container">
        <TableReact columns={columns} data={records} />
      </main>
    </div>
  );
};

export default TableReactPage;
