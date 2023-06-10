// TableReact.js

import React from "react";
import { useTable, useSortBy, usePagination, useExpanded } from "react-table";
import Bases from "./Bases";

const TableReact = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    useExpanded,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table
        className="TableReact"
        {...getTableProps()}
        style={{ margin: "0 auto", width: "80%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
              <th></th> {/* Add this line */}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);

            const onToggleRowExpanded = () => {
              row.toggleRowExpanded(!row.isExpanded);
            };

            return (
              <React.Fragment key={row.getRowProps().key}>
                <tr
                  {...row.getRowProps()}
                  className={row.isExpanded ? "row-expanded" : "row-collapsed"}
                >
                  {row.cells.map((cell, cellIndex) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={
                          cellIndex === 0
                            ? "first-cell"
                            : cellIndex === 1
                            ? "second-cell"
                            : cellIndex === 2
                            ? "third-cell"
                            : cellIndex === row.cells.length - 1
                            ? "last-cell"
                            : ""
                        }
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                  <td>
                    <span
                      {...row.getToggleRowExpandedProps()}
                      onClick={onToggleRowExpanded}
                    >
                      {row.isExpanded ? "⬆️" : "⬇️"}
                    </span>
                  </td>
                </tr>
                {row.isExpanded ? (
                  <React.Fragment>
                    <tr className="expanded-content">
                      <td className="Bases" colSpan={6}>
                      </td>
                    </tr>
                    <tr className="extended-div">
                      <td colSpan={6}></td>
                    </tr>
                  </React.Fragment>
                ) : (
                  <tr className="extended-div">
                    <td colSpan={6}></td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous Page
        </button>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next Page
        </button>
      </div>
      {/* render the rest of your table as usual... */}
    </>
  );
};

export default TableReact;
