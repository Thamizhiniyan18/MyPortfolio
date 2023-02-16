import React from "react";
import styles from "./Dev.module.css";
import devbg from "../../../../assets/devbg.mp4";

const Dev = () => {
  return (
    <div id="Dev" className={styles.Dev}>
      <video autoPlay muted loop className={styles.DevBg}>
        <source src={devbg} type="video/mp4" />
      </video>
      <div className="OverLay"></div>
      <h1>FrontEnd</h1>
      <h1>Developer</h1>
    </div>
  );
};

export default Dev;
