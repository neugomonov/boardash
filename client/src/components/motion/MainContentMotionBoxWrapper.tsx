import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const MainContentMotionBoxWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="appearing"
      animate="visible"
      exit="hidden"
      variants={{
        appearing: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        },
      }}
    >
      <Box m="1.5rem 2.5rem">{children}</Box>
    </motion.div>
  );
};

export default MainContentMotionBoxWrapper;
