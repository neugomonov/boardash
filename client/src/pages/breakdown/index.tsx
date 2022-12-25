import { Box } from "@mui/material";
import BreakdownChart from "components/BreakdownChart";
import Header from "components/Header";
import MainContentMotionBoxWrapper from "components/motion/MainContentMotionBoxWrapper";
import Wrapper from "hoc/Wrapper";

const Breakdown = () => {
  return (
    <MainContentMotionBoxWrapper key="breakdown">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </MainContentMotionBoxWrapper>
  );
};

export default Wrapper(Breakdown);
