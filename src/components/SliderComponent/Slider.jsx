import React, { useState, useRef, useEffect } from "react";
import "./SliderStyle.css";
import { motion } from "framer-motion";
import images from "../../utils/images";
import f1Drivers2023 from "../../utils/drivers2023";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const sliderBody = useRef();

  useEffect(() => {
    if (sliderBody.current) {
      console.log(
        sliderBody.current.scrollWidth,
        sliderBody.current.offsetWidth
      );
      setWidth(sliderBody.current.scrollWidth - sliderBody.current.offsetWidth);
    }
  }, [sliderBody.current]);

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
            {images.map((image, index) => (
              <motion.div className="slider-image-item" key={image}>
                <img src={image} alt="drivers" />
                <h2>{f1Drivers2023[index]}</h2>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
