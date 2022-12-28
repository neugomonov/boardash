import { Box } from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
import Header from "components/Header";
import MainContentMotionBoxWrapper from "components/motion/MainContentMotionBoxWrapper";

const Breakdown = () => {
  return (
    <MainContentMotionBoxWrapper>
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart isDashboard={false} />
      </Box>
    </MainContentMotionBoxWrapper>
  );
};

export default Breakdown;
