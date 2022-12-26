import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
  useTheme,
} from "@mui/material";
import profileImage from "assets/thispersondoesnotexist.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FlexBetween from "./FlexBetween";
import MotionBox from "./motion/MotionBox";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const router = useRouter();
  const { pathname } = useRouter();
  const [active, setActive] = useState("");
  const theme = useTheme();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <AnimatePresence>
      {isSidebarOpen ? (
        <motion.div
          key="sidebarContent"
          initial="appearing"
          animate="visible"
          exit="appearing"
          variants={{
            appearing: {
              x: -250,
              transition: {
                ease: easeInOutExpo,
                duration: 0.8,
              },
            },
            visible: {
              x: 0,
              transition: {
                ease: easeInOutExpo,
                duration: 0.8,
              },
            },
          }}
        >
          <Box component="nav">
            <SwipeableDrawer
              open={isSidebarOpen}
              onOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              variant="persistent"
              anchor="left"
              sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                  color: theme.palette.secondary[200],
                  backgroundColor: theme.palette.background.alt,
                  boxSizing: "border-box",
                  borderWidth: isNonMobile ? 0 : "2px",
                  width: drawerWidth,
                  overflow: "hidden",
                },
              }}
            >
              <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                  <FlexBetween color={theme.palette.secondary.main}>
                    <Box display="flex" alignItems="center" gap="0.5rem">
                      <Typography variant="h4" fontWeight="bold">
                        BOARDASH
                      </Typography>
                    </Box>
                    {!isNonMobile ? (
                      <IconButton
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      >
                        <ChevronLeft />
                      </IconButton>
                    ) : null}
                  </FlexBetween>
                </Box>
                <List sx={{ overflow: "hidden" }}>
                  {navItems.map(({ text, icon }) => {
                    if (!icon) {
                      return (
                        <Typography
                          key={text}
                          sx={{ m: "2.25rem 0 1rem 3rem" }}
                        >
                          {text}
                        </Typography>
                      );
                    }
                    const lcText = text.toLowerCase();
                    return (
                      <MotionBox key={text}>
                        <ListItem disablePadding>
                          <ListItemButton
                            onClick={() => {
                              router.push(`/${lcText}`);
                              setActive(lcText);
                            }}
                            sx={{
                              backgroundColor:
                                active === lcText
                                  ? theme.palette.secondary[300]
                                  : "transparent",
                              color:
                                active === lcText
                                  ? theme.palette.primary[600]
                                  : theme.palette.secondary[100],
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                ml: "2rem",
                                color:
                                  active === lcText
                                    ? theme.palette.primary[600]
                                    : theme.palette.secondary[200],
                              }}
                            >
                              {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            {active === lcText ? (
                              <ChevronRightOutlined sx={{ ml: "auto" }} />
                            ) : null}
                          </ListItemButton>
                        </ListItem>
                      </MotionBox>
                    );
                  })}
                </List>
              </Box>
              <Box position="absolute" bottom="2rem">
                <Divider />
                <FlexBetween
                  textTransform="none"
                  gap="1rem"
                  m="1.5rem 2rem 0 3rem"
                >
                  <Box
                    component="img"
                    alt="profile"
                    src={profileImage.src}
                    height="40px"
                    width="40px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  />
                  <Box textAlign="left">
                    <Typography
                      fontWeight="bold"
                      fontSize="0.9rem"
                      sx={{ color: theme.palette.secondary[100] }}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      fontSize="0.8rem"
                      sx={{ color: theme.palette.secondary[200] }}
                    >
                      {user.occupation}
                    </Typography>
                  </Box>
                  <MotionBox>
                    <IconButton>
                      <SettingsOutlined
                        sx={{
                          color: theme.palette.secondary[300],
                          fontSize: "25px",
                        }}
                      />
                    </IconButton>
                  </MotionBox>
                </FlexBetween>
              </Box>
            </SwipeableDrawer>
          </Box>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export function easeInOutExpo(x: number): number {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

export default Sidebar;
