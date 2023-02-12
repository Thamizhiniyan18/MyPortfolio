import React, { useRef } from "react";
import styles from "./HeyText.module.css";
import OnHoverColorChanger from "../../../../../UI Elements/onHoverColorChanger/OnHoverColorChanger";

const HeyText = () => {
  const ref = useRef();
  const heyThere = ["H", "e", "y", "T", "h", "e", "r", "e"];

  return (
    <div className={styles.HeyText}>
      {heyThere.map((letter) => (
        <div
          className={`${styles.letter} Letter`}
          key={Math.random()}
          ref={ref}
        >
          <OnHoverColorChanger>{letter}</OnHoverColorChanger>
        </div>
      ))}
    </div>
  );
};

export default HeyText;
