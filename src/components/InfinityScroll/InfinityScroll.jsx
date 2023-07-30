import React from "react";
import "./InfinityScrollStyle.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const InfinityScroll = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    // eslint-disable-next-line no-dupe-keys
    gsap.set(secondText.current, { xPercent, xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="sliderContainer">
      <div ref={slider} className="slider">
        <p ref={firstText}>MONACO AUSTRIA HUNGARY NETHERLANDS JAPAN &nbsp; </p>
        <p ref={secondText}>MONACO AUSTRIA HUNGARY NETHERLANDS JAPAN &nbsp; </p>
      </div>
    </div>
  );
};

export default InfinityScroll;
