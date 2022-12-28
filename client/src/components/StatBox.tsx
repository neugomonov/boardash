import { Box, SvgIconTypeMap, Typography, useTheme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { motion } from "framer-motion";
import FlexBetween from "./FlexBetween";

const StatBox = ({
  title,
  value,
  increase,
  icon,
  description,
}: {
  title: string;
  value: string;
  increase: string;
  icon: any;
  description: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      component={motion.div}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", bounce: 0.8, duration: 1 },
      }}
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      sx={{
        transition: "background .2s ease, color .2s ease",
      }}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>
      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary[200] }}
      >
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
