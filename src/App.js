import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [hoverBoard, setHoverBoard] = useState([]);
  const ChessBoardData = Array(8)
    .fill("")
    .map((_) => Array(8).fill(""));

  function handleMouseOver(rowIndex, colIndex) {
    console.log("::", rowIndex, colIndex);
    setHoverBoard([rowIndex, colIndex]);
  }
  function handleMouseLeave() {
    setHoverBoard([]);
  }
  function getBackground(row, col) {
    if (!hoverBoard) return "";
    const [rowIndex, colIndex] = hoverBoard;
    if (row == rowIndex && col == colIndex) return "lightBlue";
    if (Math.abs(rowIndex - row) === Math.abs(colIndex - col))
      return "darkBlue";
    return "";
  }

  return (
    <>
      <div className="section">
        <h1 className="text-white">ChessBoard</h1>
      </div>
      <div className="above-grid">
        <div className="grid">
          {ChessBoardData.map((row, rowIndex) =>
            row.map((_, colIndex) => {
              const darkColor = (rowIndex + colIndex) % 2 === 1;

              return (
                <div
                  className={`${darkColor ? "white" : "black"}`}
                  key={`${colIndex}-${rowIndex}`}
                  onMouseEnter={() => handleMouseOver(rowIndex, colIndex)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    backgroundColor: getBackground(rowIndex, colIndex),
                    cursor: "pointer",
                  }}
                ></div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default App;
