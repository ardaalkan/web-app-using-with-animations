import React, { useState, useRef, useEffect } from "react";
import "./SliderStyle.css";
import { motion } from "framer-motion";
import images from "../../utils/images";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const sliderBody = useRef();

  useEffect(() => {
    console.log(sliderBody.current.scrollWidth, sliderBody.current.offsetWidth);
    setWidth(sliderBody.current.scrollWidth - sliderBody.current.offsetWidth);
  }, []);

  console.log(images);
  return (
    <section className="slider-component">
      <div className="slider-wrapper">
        <div className="slider-head">F1 Drivers 2023</div>
        <motion.div className="slider-body" ref={sliderBody}>
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => (
              <motion.div className="slider-image-item" key={image}>
                <img src={image} alt="drivers" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
