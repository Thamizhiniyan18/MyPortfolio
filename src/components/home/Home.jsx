import React from "react";
import styles from "./Home.module.css";
import WelcomeText from "./welcomeText/WelcomeText";
import RainbowBox from "./rainbowDiv/RainbowBox";

const Home = () => {
  return <div className={styles.Home}>
    <WelcomeText />
    <RainbowBox />
  </div>;
};

export default Home;
