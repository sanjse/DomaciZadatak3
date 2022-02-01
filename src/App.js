import "./App.css";
import NavBar from "./components/NavBar";
import Finalists from "./components/Finalists";
import { useState } from "react";

function App() {
  const [votesNum, setVotesNum] = useState(0);
  const finalists = [
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
  ];
  function addFinalist(name) {
    console.log("Izabran je finalista: " + name);
    setVotesNum(votesNum + 1);
  }
  return (
    <div className="App">
      <NavBar votesNum={votesNum}></NavBar>
      <Finalists finalists={finalists} onAdd={addFinalist} />
    </div>
  );
}

export default App;
