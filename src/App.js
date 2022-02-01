import "./App.css";
import NavBar from "./components/NavBar";
import Finalists from "./components/Finalists";
import Votes from "./components/Votes";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [votesNum, setVotesNum] = useState(0);
  
  const [finalVotes, setFinalVotes] = useState([]);
  const [finalists] = useState([
    {
      id: 1,
      name: "1. Chanel",
      song: "SloMo",
      votes: 0,
    },
    {
      id: 2,
      name: "2. Rayden",
      song: "Calle de la lloreria",
      votes: 0,
    },
    {
      id: 3,
      name: "3. Xeinn",
      song: "Eco",
      votes: 0,
    },
  ]);
  function refreshVotes() {
    let newFinalists = finalists.filter((fin) => fin.votes > 0);
    setFinalVotes(newFinalists);
  }

  function addFinalist(name,id) {
    console.log("Izabran je finalista: " + name);
    setVotesNum(votesNum + 1);
    finalists.forEach((fin) => {
      if (fin.id === id) {
        fin.votes++;
      }
      console.log(fin.votes);
    });
    refreshVotes();
  }
  return (
    <BrowserRouter className="App">
      <NavBar votesNum={votesNum}></NavBar>
      <h1>Glasajte za svoje favorite!</h1>
      <Routes>
        <Route
          path="/"
          element={<Finalists finalists={finalists} onAdd={addFinalist} />}
        />
        <Route path="/votes" element={<Votes finalists={finalVotes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
