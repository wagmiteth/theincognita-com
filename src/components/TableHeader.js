import React from "react";

const TableHeader = ({ count }) => {
  return (
    <section className="header-h2">
      <h2 id="header-h2">Nodes</h2>
      <p id="header-h2">
        Currently mapping {count} nodes. 
        <a href="https://twitter.com/incognitaeth" target="_blank" rel="noreferrer">
        &nbsp;Subscribe </a>
        for updates or <a href="apply">apply</a> to get listed.
      </p>
    </section>
  );
};

export default TableHeader;
