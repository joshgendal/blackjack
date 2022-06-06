import { useReducer, useEffect } from "react";
import { dealCard } from "../utils/game";
const intitialState = {
  hands: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_INITIAL_HANDS":
      return {
        hands: payload,
      };
    default:
      return state;
  }
};

const dealInitialHand = () => {
  // return new Promise((resolve, reject) => {
  const cardOne = dealCard();
  const cardTwo = dealCard();
  return [cardOne, cardTwo];
  // });
};

const Game = (props) => {
  const { numPlayers } = props;

  const dealPlayers = () => {
    console.log("deal pl called");
    let hands = [];
    for (var i = 0; i < numPlayers; i++) {
      const newHand = dealInitialHand();
      hands.push(newHand);
    }
    dispatch({ type: "SET_INITIAL_HANDS", payload: hands });
  };
  useEffect(() => {
    // console.log("effect");
    return () => dealPlayers();
  }, []);
  const [state, dispatch] = useReducer(reducer, intitialState);
  return <div>GAME</div>;
};

export default Game;
