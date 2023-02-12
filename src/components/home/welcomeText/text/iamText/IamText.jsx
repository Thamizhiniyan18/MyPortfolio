import React from 'react'
import styles from "./IamText.module.css"
import OnHoverColorChanger from "../../../../../UI Elements/onHoverColorChanger/OnHoverColorChanger";

const IamText = () => {
    const iam = ["I", "A", "M"];

  return (
    <div className={styles.IamText}>
      {iam.map((letter) => (
        <div className={`${styles.letter} Letter`} key={Math.random()}>
          <OnHoverColorChanger>{letter}</OnHoverColorChanger>
        </div>
      ))}
    </div>
  )
}

export default IamText