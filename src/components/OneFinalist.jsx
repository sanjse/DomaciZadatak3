import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";


function OneFinalist() {
    const stil = { margin: 1 + "em", borderStyle: "solid" };
    return (
        <div className="card" style={stil}>
            <img
                className="card-img-top"
                src="https://www.eurodeum.com/wp-content/uploads/2022/01/benidorm-fest.jpg"
                alt="Naslovna slika"
            />
            <div className="card-body">
                <h3 className="card-title">Finalist name</h3>
                <p className="card-text">Song title</p>
            </div>
            <button className="btn">
                <BsSuitHeartFill />
            </button>

        </div>
    );
}

export default OneFinalist;