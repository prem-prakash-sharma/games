import React from "react";
import Box from "./Box";

export default function Index() {
  const [box, setBox] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);

  const handleClick = (i) => {
    if (box[i]) return;
    setBox({ ...box, [i]: isXNext ? "X" : "O" });
    setIsXNext(!isXNext);
  };

  const reset = () => {
    setBox(Array(9).fill(null));
  };

  const winner = (box) => {
    const winPos = [
      [0, 1, 2], // row
      [3, 4, 5], // row
      [6, 7, 8], // row
      [0, 3, 6], // column
      [1, 4, 7], // column
      [2, 5, 8], // column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (let i = 0; i < winPos.length; i++) {
      const [a, b, c] = winPos[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        return box[a];
      }
    }
    return null;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-4xl text-center m-5">Tic Tac Toe</h1>
        <h2 className="text-2xl m-5 text-center">
          {winner(box)
            ? winner(box) + " is the winner"
            : isXNext
            ? "X's Turn"
            : "O's Turn"}
        </h2>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-4">
            <Box value={box[0]} onClick={() => handleClick(0)} />
            <Box value={box[1]} onClick={() => handleClick(1)} />
            <Box value={box[2]} onClick={() => handleClick(2)} />
            <Box value={box[3]} onClick={() => handleClick(3)} />
            <Box value={box[4]} onClick={() => handleClick(4)} />
            <Box value={box[5]} onClick={() => handleClick(5)} />
            <Box value={box[6]} onClick={() => handleClick(6)} />
            <Box value={box[7]} onClick={() => handleClick(7)} />
            <Box value={box[8]} onClick={() => handleClick(8)} />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 p-2 px-5 m-5 font-semibold rounded-full justify-center"
            onClick={reset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
