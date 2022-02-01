import React from "react";
import OneFinalist from "./OneFinalist.jsx";

const Finalists = ({ finalists, onAdd }) => {
    return (
        <div className="all-finalists">
            {finalists.map((fin) => (
                <OneFinalist finalist={fin} key={fin.id} onAdd={onAdd} />
            ))}
        </div>
    );
};

export default Finalists;