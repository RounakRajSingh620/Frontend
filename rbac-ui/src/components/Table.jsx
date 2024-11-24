// import React from "react";
import PropTypes from "prop-types";
import "../styles/Table.css";

const Table = ({ headers, data, onDelete }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {Object.values(row).map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                        <td>
                            <button onClick={() => onDelete(rowIndex)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// **PropTypes validation**
Table.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings
    data: PropTypes.arrayOf(PropTypes.object).isRequired,   // Array of objects
    onDelete: PropTypes.func.isRequired,                   // Function
};

export default Table;
