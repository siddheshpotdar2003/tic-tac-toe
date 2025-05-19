import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setIsXNext(!isXNext);
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
        <button className="game-info-button">{description}</button>
      </li>
    );
  });

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
