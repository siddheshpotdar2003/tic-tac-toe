import checkWinner from "../utils/checkWinner";
import Square from "./Square";
import Confetti from "react-confetti";

const Board = ({ isXNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || checkWinner(squares)) return;
    const nextSquares = squares.slice();
    isXNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
  };

  const winner = checkWinner(squares);
  const winningLine = winner?.line || [];
  const isDraw = !winner && squares.every((square) => square !== null);

  let status;
  if (winner) {
    status = "💥Winner: " + winner.winner + " 🎉";
  } else if (isDraw) {
    status = "Draw ❌";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <>
      {winner && <Confetti />}
      <div className="status">{status}</div>
      {/* <div className="board">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div> */}
      <div className="board">
        {Array.from({ length: 9 }).map((_, i) => {
          const isWinning = winningLine.includes(i);
          return (
            <Square
              key={i}
              value={squares[i]}
              onClick={() => handleClick(i)}
              isWinning={isWinning}
            />
          );
        })}
      </div>
    </>
  );
};

export default Board;
