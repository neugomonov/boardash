import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const MainContentMotionBoxWrapper = ({
  children,
  key,
}: {
  children: ReactNode;
  key: string;
}) => {
  return (
    <Box
      m="1.5rem 2.5rem"
      component={motion.div}
      key={key}
      initial="appearing"
      animate="visible"
      variants={{
        appearing: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Box>
  );
};

export default MainContentMotionBoxWrapper;
