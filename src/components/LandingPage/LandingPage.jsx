import React from "react";
import "./LandingPageStyle.css";
import landingImg from "../../assets/race-f1.jpg";
import { motion } from "framer-motion";

const LandingPage = () => {
  const imgAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
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
        />
        <h1 className="race-history-title">Race &nbsp; Schedule 2023</h1>
        <h2 className="lorem-ipsum-text">
          2023 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
