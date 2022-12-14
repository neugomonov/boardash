import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import MainContentMotionBoxWrapper from "components/motion/MainContentMotionBoxWrapper";
import MotionBox from "components/motion/MotionBox";
import OverviewChart from "components/OverviewChart";
import StatBox from "components/StatBox";
import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "user ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created at",
      flex: 1,
    },
    {
      field: "products",
      headerName: "№ of products",
      flex: 0.5,
      sortable: false,
      renderCell: (params: GridCellParams) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params: GridCellParams) =>
        `$${Number(params.value).toFixed(2)}`,
    },
  ];
  return (
    <MainContentMotionBoxWrapper>
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <MotionBox>
            <Button
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                transition: "background .2s ease, color .2s ease",
              }}
            >
              <DownloadOutlined sx={{ mr: "10px" }} />
              Download reports
            </Button>
          </MotionBox>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total customers"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Sales today"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          sx={{
            transition: "background .2s ease, color .2s ease",
          }}
        >
          <OverviewChart view="sales" isDashboard={true} />
        </Box>
        <StatBox
          title="Monthly sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Yearly sales"
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": { border: "none", borderRadius: "5rem" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
            transition: "background .2s ease, color .2s ease",
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
          sx={{
            transition: "background .2s ease, color .2s ease",
          }}
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Sales by category
          </Typography>
          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="0,8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales.
          </Typography>
        </Box>
      </Box>
    </MainContentMotionBoxWrapper>
  );
};

export default Dashboard;
