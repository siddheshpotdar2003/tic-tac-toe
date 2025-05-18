import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
    console.log(i);
  };

  return (
    <div className="board">
      <Square value={squares[0]} onClick={() => handleClick(0)} />
      <Square value={squares[1]} onClick={() => handleClick(1)} />
      <Square value={squares[2]} onClick={() => handleClick(2)} />
      <Square value={squares[3]} onClick={() => handleClick(3)} />
      <Square value={squares[4]} onClick={() => handleClick(4)} />
      <Square value={squares[5]} onClick={() => handleClick(5)} />
      <Square value={squares[6]} onClick={() => handleClick(6)} />
      <Square value={squares[7]} onClick={() => handleClick(7)} />
      <Square value={squares[8]} onClick={() => handleClick(8)} />
    </div>
  );
};

export default Board;
