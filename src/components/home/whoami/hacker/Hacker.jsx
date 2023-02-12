import React from "react";
import styles from "./Hacker.module.css";
import hackerbg from "../../../../assets/hackerbg.mp4"

const Hacker = () => {
  return (
    <div id="Hacker" className={styles.Hacker}>
      <video autoplay="true" muted loop className={styles.HackerBg}>
        <source src={hackerbg} type="video/mp4" />
      </video>
      <div className="OverLay"></div>
      <h1>Ethical</h1>
      <h1>Hacker</h1>
    </div>
  );
};

export default Hacker;
