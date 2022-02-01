import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";


function OneFinalist({ finalist, onAdd, voted }) {
    const stil = { margin: 1 + "em", borderStyle: "solid" };
    return (
        <div className={voted === 1 ? "card" : "votes-card"} style={stil}>
            <img
                className={voted === 1 ? "card-img-top" : "card-img-left"}
                src="https://www.eurodeum.com/wp-content/uploads/2022/01/benidorm-fest.jpg"
                alt="Naslovna slika"
            />
            <div className="card-body">
                <h2 className="card-title">{finalist.name}</h2>
                <h4 className="card-text"><i>{finalist.song}</i></h4>
            </div>

            {voted === 1 ? (
                <>
                    <button
                        className="btn"
                        onClick={() => onAdd(finalist.name, finalist.id)}
                    >
                        <BsSuitHeartFill />
                    </button>

                </>
            ) : (
                <h4>Broj glasova: {finalist.votes}</h4>
            )}

        </div>
    );
}

export default OneFinalist;