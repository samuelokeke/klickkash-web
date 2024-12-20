"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const liVariant: Variants = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: "400", damping: 10, staggerChildren: 0.7 },
  },
  tap: {
    scale: 0.9,
    transition: { type: "spring", stiffness: "400" },
  },
};

const Utilities = () => {
  return (
    <ul className="flex items-center justify-evenly gap-6 border h-full">
      <motion.li
        className="flex flex-col justify-center items-center gap-3 cursor-pointer"
        whileTap="tap"
        whileHover="hover"
        variants={liVariant}
      >
        <motion.div className="w-11 h-11 bg-muted rounded-full grid place-content-center">
          <Image src="assets/icons/send-2.svg" className="w-6 h-auto" width={0} height={0} alt="transfer" />
        </motion.div>

        <p className="text-sm">Transfer</p>
      </motion.li>

      <motion.li
        className="flex flex-col justify-center items-center gap-3 cursor-pointer"
        whileTap="tap"
        whileHover="hover"
        variants={liVariant}
      >
        <div className="w-11 h-11 bg-success-50 rounded-full grid place-content-center">
          <Image src="assets/icons/airtime.svg" className="w-6 h-auto" width={0} height={0} alt="airtime" />
        </div>

        <p className="text-sm">Airtime</p>
      </motion.li>

      <motion.li
        className="flex flex-col justify-center items-center gap-3 cursor-pointer"
        whileTap="tap"
        whileHover="hover"
        variants={liVariant}
      >
        <div className="w-11 h-11 bg-[#EEE6E9] rounded-full grid place-content-center">
          <Image src="assets/icons/receipt-item.svg" className="w-6 h-auto" width={0} height={0} alt="internet" />
        </div>

        <p className="text-sm">Internet</p>
      </motion.li>

      <motion.li
        className="flex flex-col justify-center items-center gap-3 cursor-pointer"
        whileTap="tap"
        whileHover="hover"
        variants={liVariant}
      >
        <div className="w-11 h-11 bg-[#E9EEE6] rounded-full grid place-content-center">
          <Image src="assets/icons/electricity.svg" className="w-6 h-auto" width={0} height={0} alt="electricity" />
        </div>

        <p className="text-sm">Electricity</p>
      </motion.li>

      <motion.li
        className="flex flex-col justify-center items-center gap-3 cursor-pointer"
        whileTap="tap"
        whileHover="hover"
        variants={liVariant}
      >
        <div className="w-11 h-11 bg-[#FFFBE6] rounded-full grid place-content-center">
          <Image src="assets/icons/tv.svg" className="w-6 h-auto" width={0} height={0} alt="tv" />
        </div>

        <p className="text-sm">TV</p>
      </motion.li>
    </ul>
  );
};

export default Utilities;
