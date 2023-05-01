import React from "react";
import { Box, Button } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { ToogleSidebarState } from "../../redux/slices/sidebar";
const Index = () => {

  const dispatch = useDispatch();

  return (
    <Box>
      <Button onClick={() => dispatch(ToogleSidebarState())}>Sidebar</Button>
    </Box>
  );
};

export default Index;
