import { Box } from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
import Header from "components/Header";
import { motion } from "framer-motion";
import Wrapper from "hoc/Wrapper";

const Breakdown = () => {
  return (
    <Box
      m="1.5rem 2.5rem"
      component={motion.div}
      key="Breakdown"
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
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Wrapper(Breakdown);
