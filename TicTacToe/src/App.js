import "./App.css";
import Board from "./components/Board/Board";
import Score from "./components/Score/Score";
import { useState } from "react";
import ResetButton from "./components/ResetButton/RestButton";
function App() {
  const possibleWinsOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsx] = useState(true);
  const [playerScores, setPlayerScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (boxIndex) => {
    const updateTheBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return isX === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWhoWins(updateTheBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = playerScores;
        setPlayerScores({ ...playerScores, oScore: oScore + 1 });
      } else {
        let { xScore } = playerScores;
        setPlayerScores({ ...playerScores, xScore: xScore + 1 });
      }
    }
    setBoard(updateTheBoard);
    setIsx(!isX);
  };
  const checkWhoWins = (board) => {
    for (let i = 0; i < possibleWinsOptions.length; i++) {
      const [a, b, c] = possibleWinsOptions[i];
      if (board[a] === board[b] && board[c]) {
        setGameOver(true);

        return board[a];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="App">
      <header>
        <h1 className="title">Tic Tac Toe</h1>
      </header>
      <Score playerScores={playerScores} isX={isX} />
      <Board board={board} onClick={gameOver ? resetBoard : handleClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
