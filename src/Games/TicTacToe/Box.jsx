import React from "react";

export default function Box({ value, onClick }) {
  return (
    <div
      className="cursor-pointer font-bold text-3xl h-16 w-16 border-2 border-dashed border-gray-800 flex items-center justify-center"
      onClick={onClick}
    >
      {value}
    </div>
  );
}
