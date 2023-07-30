import React from "react";
import "./InfinityImage.css";
import car1 from "../../assets/f1-1.jpg";
import car2 from "../../assets/f1-2.jpg";
import car3 from "../../assets/f1-3.jpg";
import car4 from "../../assets/f1-4.jpg";
import car5 from "../../assets/f1-5.jpg";

const InfinityImage = () => {
  return (
    <div className="image-container">
      <div className="slider">
        <div>
          <img src={car1} alt="f1 car" className="image-container_image" />
          <img src={car2} alt="f1 car" className="image-container_image" />
          <img src={car3} alt="f1 car" className="image-container_image" />
          <img src={car4} alt="f1 car" className="image-container_image" />
          <img src={car5} alt="f1 car" className="image-container_image" />
        </div>
      </div>
    </div>
  );
};

export default InfinityImage;
