"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TopProgress = () => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <motion.div style={{ scale }} className="fixed top-0 z-20 h-2 w-full bg-red-700">
      <motion.div
        style={{
          scaleY: scrollYProgress,
        }}
      />
    </motion.div>
  );
};

export default TopProgress;
