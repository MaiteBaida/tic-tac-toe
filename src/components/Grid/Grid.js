import React, { useState } from "react";
import "./Grid.scss";
import StartButton from "../../components/StartButton/StartButton";
import circle from "../../assets/icons/circle.svg";
import x from "../../assets/icons/x.svg";

// Define the winning lines globally
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

function Grid() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (index) => {
    if (board[index] !== null || calculateWinner(board) || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    setIsXNext(!isXNext);

    if (calculateWinner(newBoard)) {
      setGameOver(true); // Set gameOver to true when the game is over
    } else if (newBoard.every((cell) => cell !== null)) {
      setGameOver(true); // Set gameOver to true if it's a draw
    }
  };

  const calculateWinner = (squares) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // Return null if no winner
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((cell) => cell !== null)) {
    status = "It's a draw! Nobody wins.";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  const renderCell = (index) => {
    const cellClasses = [
      "grid-item g11",
      "grid-item g12",
      "grid-item g13",
      "grid-item g21",
      "grid-item g22",
      "grid-item g23",
      "grid-item g31",
      "grid-item g32",
      "grid-item g33",
    ];

    // Determine the appropriate image source based on the value of the current cell
    const imageSrc =
      board[index] === "X" ? x : board[index] === "O" ? circle : null;

    // Check if the current cell is part of the winning combination
    const isWinningCell =
      winner &&
      lines.some(
        (line) =>
          line.includes(index) &&
          line.every((cell) => board[cell] === board[index])
      );

    // Return the button with image content and appropriate class and click handler
    return (
      <button
        className={`${cellClasses[index]} ${
          isWinningCell ? "winning-cell" : ""
        }`}
        onClick={() => handleClick(index)}
      >
        {imageSrc && <img src={imageSrc} alt={board[index]} />}{" "}
      </button>
    );
  };

  return (
    <main className="grid">
      <section className="grid-box">
        <div className="status">{status}</div>
        <div className="button-container">
          {gameOver && <StartButton label="Play Again" onClick={resetGame} />}
        </div>
        <div className="grid-container">
          {board.map((cell, index) => renderCell(index))}
        </div>
      </section>
    </main>
  );
}

export default Grid;
