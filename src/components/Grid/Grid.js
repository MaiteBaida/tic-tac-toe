import React, { useState } from "react";
import "./Grid.scss";
import circle from "../../assets/icons/circle.svg";
import x from "../../assets/icons/x.svg";

function Grid() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== null || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], //line
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], //column
      [0, 4, 8],
      [2, 4, 6], //diagonal
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  const renderCell = (index) => {
    // Define an array of classes for each cell
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

    // Return the button with image content and appropriate class and click handler
    return (
      <button className={cellClasses[index]} onClick={() => handleClick(index)}>
        {imageSrc && <img src={imageSrc} alt={board[index]} />}{" "}
        {/* Render the image if source is available */}
      </button>
    );
  };

  return (
    <main className="grid">
      <div className="grid-container">
        {board.map((cell, index) => renderCell(index))}
      </div>
      <div>{status}</div>
    </main>
  );
}

export default Grid;
