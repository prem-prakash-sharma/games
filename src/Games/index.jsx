import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-3">
      <Link
        to="/tic-tac-toe"
        className="text-center text-2xl font-bold border-2 border-gray-800 p-4"
      >
        Tic Tac Toe
      </Link>
    </div>
  );
}
