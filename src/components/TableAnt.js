// TableAnt.js
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./css/TableAnt.css";
import base from "../Airtable";
import Links from "./Links";
import Logos from "./Logos";
import ApplicationButton from "./ApplicationButton";
import Bases from "./Bases";

const TableAnt = () => {
  const [records, setRecords] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

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

  const handleExpand = (expanded, record) => {
    console.log(`Row ${record.NodeName} is expanded: ${expanded}`);
    setExpandedRowKeys(expanded ? [record.key] : []); // Only allow one expanded row at a time
  };

  const columns = [
    {
      title: "",
      key: "Logos",
      render: (text, record) => <Logos record={record} />,
    },
    {
      title: "Name",
      dataIndex: "NodeName",
      key: "Name",
    },
    {
      title: "Mission",
      dataIndex: "Mission",
      key: "Mission",
    },
    {
      title: "Links",
      key: "Links",
      width: 190,
      render: (text, record) => <Links record={record} />,
    },
    {
      title: "Application",
      dataIndex: "Application",
      key: "Application",
      render: (text, record) => <ApplicationButton record={record} />,
    },
  ];

  return (
    <Table
      dataSource={records}
      columns={columns}
      rowClassName={(record, index) =>
        index % 2 === 0 ? "row-light" : "row-dark"
      }
      expandable={{
        expandedRowRender: (record) => (
          <Bases record={record} />
        ),
        rowExpandable: (record) => true,
        onExpand: handleExpand,
        expandedRowKeys: expandedRowKeys,
      }}
      responsive
      pagination={{
        pageSize: 20,
      }}
    />
  );
};

export default TableAnt;
