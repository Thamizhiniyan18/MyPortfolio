import React from "react";
import styles from "./SquaresContainer.module.css";
import OnHoverColorChanger from "../../../../UI Elements/onHoverColorChanger/OnHoverColorChanger";

const SquaresContainer = () => {
  let squares = Array.from(Array(1500).keys());

  return (
    <div className={styles.SquaresContainer}>
      {squares.map((square) => (
        <div className={`${styles.Square }`} key={square}>
          <OnHoverColorChanger />
        </div>
      ))}
    </div>
  );
};

export default SquaresContainer;
