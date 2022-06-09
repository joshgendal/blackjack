import "./App.css";
import BeginHandForm from "./components/BeginHandForm";
import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [numPlayers, setNumPlayers] = useState();
  const [handHasStarted, setHandHasStarted] = useState(false);
  // if hand hasn't started (user has not selected amount of players),
  // render form to select amount of players as well as button to submit
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
    // if hand has started, render Game
    return <Game numPlayers={numPlayers} />;
  }
}

export default App;
