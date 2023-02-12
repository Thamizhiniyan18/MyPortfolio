import React from 'react'
import styles from "./Welcome.module.css"
import OnHoverColorChanger from "../../../../../UI Elements/onHoverColorChanger/OnHoverColorChanger";

const WelcomeText = () => {
  const welcome = ["W", "E", "L", "C", "O", "M", "E"];

  return (
    <div className={styles.Welcome}>
      {welcome.map((letter) => (
        <div className={`${styles.letter} Letter`} key={Math.random()}>
          <OnHoverColorChanger>{letter}</OnHoverColorChanger>
        </div>
      ))}
    </div>
  )
}

export default WelcomeText