import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from "@mui/system";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
// const isAuth = true;
const DashboardLayout = () => {
  // todo: create a redux slice 
  const {isLoggedIn} = useSelector((state)=>state.auth)
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <Stack direction={"row"}>
    <SideBar/>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
