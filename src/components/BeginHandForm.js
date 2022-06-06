import { useState } from "react";

const BeginHandForm = (props) => {
  // const [numPlayers, setNumPlayers] = useState();
  const { setNumPlayers } = props;
  return (
    <form>
      <span>How many players for the next hand?</span>
      <input type="number" onChange={(e) => setNumPlayers(e.target.value)} />
    </form>
  );
};

export default BeginHandForm;
