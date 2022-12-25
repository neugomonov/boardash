import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";
import { motion } from "framer-motion";
import Wrapper from "hoc/Wrapper";
import { useState } from "react";

const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <Box
      m="1.5rem 2.5rem"
      component={motion.div}
      key="Overview"
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
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(event) => setView(event.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Wrapper(Overview);
