import React, { useEffect, useRef } from "react";
import styles from "./Box.module.css";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Box = ({
  children,
  color,
  zIndex,
  rotation,
  borderRadius,
  background,
  initialScale,
  finalScale,
  duration,
  opacity,
}) => {
  const box = useRef();
  const timeline = useRef();

  useEffect(() => {
    timeline.current = gsap.timeline();

    timeline.current.fromTo(
      [box.current],
      {},
      {
        rotate: `${rotation}`,
        opacity: 1,
        fontSize: "60px",
        scale: `${finalScale}`,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: box.current,
          scrub: 4,
          start: "top 50%",
          end: () => "+=200",
        },
      }
    );

    // timeline.current.to(document.querySelectorAll(".Bubbles"), {
    //   y: 0,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: box.current,
    //     scrub: 4,
    //     start: "top 50%",
    //     end: () => "+=200",
    //   },
    // });
  }, [rotation, finalScale, duration]);

  return (
    <div
      id="Box"
      className={styles.Box}
      style={{
        backgroundColor: `${color}`,
        zIndex: `${zIndex}`,
        borderRadius: `${borderRadius}`,
        background: `${background}`,
        scale: `${initialScale}`,
        opacity: `${opacity}`,
      }}
      ref={box}
    >
      {children}
    </div>
  );
};

export default Box;
