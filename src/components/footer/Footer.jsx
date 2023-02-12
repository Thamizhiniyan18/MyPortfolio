import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.Footer}>
      <p>
        Designed & Developed by <span>Thamizhiniyan C S</span> &#169;{" "}
        {date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
