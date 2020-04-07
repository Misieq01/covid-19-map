import React from "react";
import { motion } from "framer-motion";

const firstCircle = {
  initial: {
    height: 0,
    width: 0,
    borderRadius: 0,
  },
  animate: {
    height: "150px",
    width: "150px",
    borderRadius: "75px",
  },
};
const secondCircle = {
  initial: {
    height: "150px",
    width: "150px",
    borderRadius: "75px",

  },
  animate: {
    height: 0,
    width: 0,
    borderRadius: 0,

  },
};

const transition = { yoyo: Infinity, duration: 1.5,ease: 'easeOut'};

const LoadingPanel = () => {
  return (
    <>
        <motion.div className="loading__circle" style={{ background: "rgb(255, 82, 82)" }} variants={firstCircle} initial="initial" animate='animate' transition={transition}/>
        <motion.div
          className="loading__circle"
          style={{ background: "rgb(255, 160, 51)" }}
          variants={secondCircle}
          initial="initial"
          animate='animate'
          transition={transition}
        />
      <span className='loading__text'>Stay tight, we are loading application for you</span>
      </>
  );
};
export default LoadingPanel;
