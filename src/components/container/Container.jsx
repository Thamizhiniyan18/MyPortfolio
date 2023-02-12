import React from "react";
import Home from "../home/Home";
import styles from "./Container.module.css";

const container = () => {
  return <div className={styles.Container}>
    <Home />
  </div>;
};

export default container;
