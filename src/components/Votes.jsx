import OneFinalist from "./OneFinalist";

const Votes = ({ finalists }) => {
    return (
        <div className="votes-container">
            {finalists.map((fin) => (
                <OneFinalist finalist={fin} key={fin.id} voted={0} />
            ))}
        </div>
    );
};

export default Votes;