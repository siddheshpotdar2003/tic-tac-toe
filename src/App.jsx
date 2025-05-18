import { useState } from "react";
import Board from "./components/Board";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (squares[i] || checkWinner()) return;
    const nextSquares = squares.slice();
    isXNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const winner = checkWinner();
  let status;
  if (winner) {
    status = "💥Winner: " + winner + " 🎉";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <Board squares={squares} handleClick={handleClick} />
    </div>
  );
};

export default App;
