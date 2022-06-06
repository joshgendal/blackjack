import logo from "./logo.svg";
import "./App.css";
import BeginHandForm from "./components/BeginHandForm";
import { useState } from "react";

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
    return <div>start game</div>;
  }
}

export default App;
