import React, { useEffect, useRef } from "react";
import styles from "./WhoAmI.module.css";
import Dev from "./dev/Dev";
import Hacker from "./hacker/Hacker";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoAmi = () => {
  const whoamiContainer = useRef();
  const timeline = useRef();

  useEffect(() => {
    timeline.current = gsap.timeline();

    timeline.current.to(
      [document.getElementById("Dev"), document.getElementById("Hacker")],
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: whoamiContainer.current,
          scrub: 3,
          start: "center 100%",
          end: "center 60%",
        },
      }
    );
  }, []);

  return (
    <div className={styles.WhoAmI} ref={whoamiContainer}>
      <Dev />
      <Hacker />
    </div>
  );
};

export default WhoAmi;
