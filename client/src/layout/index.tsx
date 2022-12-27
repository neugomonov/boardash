import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { RootState } from "pages/_app";
import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";

const Layout = ({ children }: { children: ReactNode }) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state: RootState) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  return (
    <Box display={"flex"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
