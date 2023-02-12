import React from "react";
import styles from "./WelcomeText.module.css";
import SquaresContainer from "./squaresContainer/SquaresContainer";
import HeyText from "./text/heyText/HeyText";
import Welcome from "./text/welcomeText/Welcome";
import IamText from "./text/iamText/IamText";
import gsap from "gsap";

const WelcomeText = () => {
  document.addEventListener("mousemove", (event) => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let positionX = event.clientX / width - 0.55;
    let positionY = event.clientY / height - 0.55;
    gsap.to(document.querySelectorAll(".Letter"), {
      rotationX: positionX * 50,
      rotationY: -positionY * 50,
      ease: "none",
    });
  });


  return (
    <div className={styles.WelcomeText}>
      <SquaresContainer />
      <HeyText />
      <Welcome />
      <IamText />
    </div>
  );
};

export default WelcomeText;
