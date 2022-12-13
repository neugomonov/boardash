import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { useGetProductsQuery } from "state/api";
import Wrapper from "hoc/Wrapper";

const Products = () => {
  return (
    <Box>
      <Header title="PRODUCTS" subtitle="See your list of products" />
    </Box>
  );
};

export default Wrapper(Products);
