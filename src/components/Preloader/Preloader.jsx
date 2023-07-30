import React, { useEffect, useState } from "react";
import "./PreloaderStyle.css";
import { motion } from "framer-motion";
import { slideUp, opacity } from "./anim";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "Merhaba",
    "Hello",
    "Bonjour",
    "Ciao",
    "Hola",
    "你好",
    "Gutten Tag",
    "مرحبًا",
  ];

  useEffect(() => {
    if (index === words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="preloader-container"
    >
      <motion.p
        variants={opacity}
        initial="inital"
        enter="enter"
        animate="enter"
        className="preloader-text"
      >
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
