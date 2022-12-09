import { Box } from "@mui/material";
import Navbar from "components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
