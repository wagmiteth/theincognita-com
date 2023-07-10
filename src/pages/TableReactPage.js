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
import Bases from "../components/Bases";
import BasesExpanded from "../components/BasesExpanded";

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
      Header: "Mission",
      accessor: "Mission",
      Cell: ({ row }) => {
        const onToggleRowExpanded = () => {
          row.toggleRowExpanded(!row.isExpanded);
        };
        return (
          <div>
            <Mission record={row.original} isExpanded={row.isExpanded} />
              <span
                {...row.getToggleRowExpandedProps()}
                onClick={onToggleRowExpanded}
                className="showMoreSpan"
              >
                {row.isExpanded ? "Show less" : "Show more"}
              </span>
          </div> 
        );
        
      },
    },
  
    {
      Header: "Links",
      accessor: "Links",
      Cell: ({ row }) => (
        row.isExpanded 
        ? <div className="LinksExpanded"><LinksExpanded record={row.original} /></div>
        : <div className="Links"><Links record={row.original} /></div>
      ),
    },
    {
      Header: "Bases",
      accessor: "Bases",
      Cell: ({ row }) => (
        row.isExpanded 
        ? <div className="BasesExpanded"><BasesExpanded record={row.original} /></div>
        : <div className="Bases"><Bases record={row.original} /></div>
      ),
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