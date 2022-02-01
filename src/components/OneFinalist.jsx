import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";


function OneFinalist({ finalist, onAdd }) {
    const stil = { margin: 1 + "em", borderStyle: "solid" };
    return (
        <div className="card" style={stil}>
            <img
                className="card-img-top"
                src="https://www.eurodeum.com/wp-content/uploads/2022/01/benidorm-fest.jpg"
                alt="Naslovna slika"
            />
            <div className="card-body">
                <h2 className="card-title">{finalist.name}</h2>
                <h4 className="card-text"><i>{finalist.song}</i></h4>
            </div>
            <button className="btn" onClick={() => onAdd(finalist.name)}>
                <BsSuitHeartFill />
            </button>

        </div>
    );
}

export default OneFinalist;