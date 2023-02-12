import React from "react";
import styles from "./OnHoverColorChanger.module.css";

const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const onMouseEnter__Handler = (event) => {
  let color = getRandomColor();
  event.target.style.backgroundColor = `${color}`;
  event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const onMouseLeave__Handler = (event) => {
  event.target.style.background = "transparent";
  event.target.style.boxShadow = "black";
};

const OnHoverColorChanger = (props) => {
  return (
    <div
      className={styles.OnHoverColorChanger}
      onMouseEnter={onMouseEnter__Handler}
      onMouseLeave={onMouseLeave__Handler}
    >
      {props.children}
    </div>
  );
};

export default OnHoverColorChanger;
