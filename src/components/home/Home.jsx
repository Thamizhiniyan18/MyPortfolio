import React from "react";
import styles from "./Home.module.css";
import WelcomeText from "./welcomeText/WelcomeText";
import RainbowBox from "./rainbowDiv/RainbowBox";
import WhoAmi from "./whoami/WhoAmI";

const Home = () => {
  return (
    <div className={styles.Home}>
      <WelcomeText />
      <RainbowBox />
      <WhoAmi />
    </div>
  );
};

export default Home;
