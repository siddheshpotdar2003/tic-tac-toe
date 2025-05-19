import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const isXNext = currentMove % 2 === 0;

  console.log("current move: ", currentMove);
  console.log("history: ", history);
  console.log("current squaers: ", currentSquares);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button className="game-info-button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  const jumpTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <div className="game-board">
        <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <h3>Game Info</h3>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

export default App;
