import logo from "./logo.svg";
import "./App.css";
import BeginHandForm from "./components/BeginHandForm";
import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [numPlayers, setNumPlayers] = useState();
  const [handHasStarted, setHandHasStarted] = useState(false);
  if (!handHasStarted) {
    return (
      <div className="App">
        <BeginHandForm setNumPlayers={setNumPlayers} />
        <button onClick={() => setHandHasStarted(true)} disabled={!numPlayers}>
          LET'S PLAY!
        </button>
      </div>
    );
  } else {
    return <Game numPlayers={numPlayers} />;
  }
}

export default App;
