import React, { useState, useEffect } from "react";
import "./LandingPageStyle.css";
import landingImg from "../../assets/race-f1.jpg";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const imgAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const imgMovementFactor = 0.03;
  const imgXOffset =
    (mousePos.x / window.innerWidth - 0.5) *
    window.innerWidth *
    imgMovementFactor;
  const imgYOffset =
    (mousePos.y / window.innerHeight - 0.5) *
    window.innerHeight *
    imgMovementFactor;

  const hoverAnimationImg = {
    x: imgXOffset,
    y: imgYOffset,
  };

  const h2MovementFactor = 0.01;
  const h2XOffset =
    (mousePos.x / window.innerWidth - 0.5) *
    window.innerWidth *
    h2MovementFactor;
  const h2YOffset =
    (mousePos.y / window.innerHeight - 0.5) *
    window.innerHeight *
    h2MovementFactor;

  const hoverAnimationH2 = {
    x: -h2XOffset,
    y: -h2YOffset,
  };

  return (
    <div className="landing-page-container">
      <div>
        <motion.img
          src={landingImg}
          alt="landing"
          className="landing-img"
          variants={imgAnimation}
          initial="hidden"
          animate="show"
          style={{
            transform: `translate(${hoverAnimationImg.x}px, ${hoverAnimationImg.y}px)`,
          }}
        />
        <h1 className="race-history-title">Race &nbsp; Schedule 2023</h1>
        <motion.h2
          className="lorem-ipsum-text"
          style={{
            transform: `translate(${hoverAnimationH2.x}px, ${hoverAnimationH2.y}px)`,
          }}
        >
          2023 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
        </motion.h2>
      </div>
    </div>
  );
};

export default LandingPage;
