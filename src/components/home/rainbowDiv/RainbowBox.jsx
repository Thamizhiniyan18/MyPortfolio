import React from "react";
import styles from "./RainbowBox.module.css";
import background from "../../../assets/Coding.jpg";
import Box from "./box/Box";

const colors = [
  { color: "rgba(255, 0, 0)", rotation: "10deg" },
  { color: "rgba(255, 166, 0)", rotation: "20deg" },
  { color: "rgba(255, 255, 0)", rotation: "30deg" },
  { color: "rgba(0, 128, 0)", rotation: "40deg" },
  { color: "rgba(0, 0, 255)", rotation: "50deg" },
  { color: "rgba(76, 0, 130)", rotation: "60deg" },
  { color: "rgba(238, 130, 238)", rotation: "70deg" },
  { color: "rgba(35, 143, 89)", rotation: "80deg" },
  { color: "black", rotation: "90deg" },
];

const boxGenerator = () => {
  const boxList = [];
  for (let i = 1; i <= colors.length; i++) {
    boxList.push({
      key: i,
      color: colors[i - 1].color,
      rotation: colors[i - 1].rotation,
      zIndex: `-${i}`,
    });
  }
  return boxList;
};

boxGenerator();

const RainbowBox = () => {
  return (
    <div id="RainbowBackground" className={styles.RainbowBox}>
      <div
        id="BoxContainer"
        className={styles.BoxesContainer}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      {boxGenerator().map((each) => (
        <Box
          key={each.key}
          color={each.color}
          rotation={each.rotation}
          initialScale="1"
          finalScale="1"
        />
      ))}
      <Box
        borderRadius="15px"
        background="rgba(255,255,255, 0) radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,0.5) 100%)"
        // background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(233,233,233,1) 50%, rgba(0,0,0,1) 100%);"
        rotation="90deg"
        initialScale="1"
        finalScale="1"
        opacity="0"
      />
      <Box
        // color={"white"}
        borderRadius="50%"
        background="transparent"
        // background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(233,233,233,1) 50%, rgba(0,0,0,1) 100%);"
        rotation="360deg"
        initialScale="1"
        finalScale="1"
      >
        Thamizhiniyan C S
      </Box>
    </div>
  );
};

export default RainbowBox;
