import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Img from '../../smallComp/image/Img';

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 0, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 0, duration: 0 },
        }}
         // Contoh: menambahkan kelas CSS "relative"
        style={{ marginTop: "-20px" }} // Contoh: menyesuaikan margin-top
      >
        <motion.img
          src="/muka.png"
          alt="muka"
          initial={{ scale: 0, y: 0, x: -1 }}
          animate={{ scale: 1.0 }}
          transition={{ scale: { delay: 1.5, duration: 1.5 } }}
          className="h-14 w-24 object-contain"
        />
      </motion.div>
    </>
  );
}
