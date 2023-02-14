import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/system";
import SideBar from "./SideBar";
const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
    <SideBar/>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
