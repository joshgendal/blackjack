import { useReducer, useEffect } from "react";
import { dealCard } from "../utils/game";

const intitialState = {
  hands: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_INITIAL_HAND":
      return {
        hands: [...state.hands, payload],
      };
    default:
      return state;
  }
};

const dealInitialHand = () => [dealCard(), dealCard()];

const Game = (props) => {
  const { numPlayers } = props;

  useEffect(() => {
    const dealPlayers = () => {
      for (let i = 0; i < numPlayers; i++) {
        const newHand = dealInitialHand();
        dispatch({ type: "ADD_INITIAL_HAND", payload: newHand });
      }
    };
    console.log("effect");
    return () => dealPlayers();
  }, [numPlayers]);
  const [state, dispatch] = useReducer(reducer, intitialState);
  return (
    <>
      {state.hands.map((hand, outerIndex) => {
        return (
          <div key={outerIndex}>
            {hand.map((card, innerIndex) => (
              <span key={innerIndex}>{card}</span>
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Game;
