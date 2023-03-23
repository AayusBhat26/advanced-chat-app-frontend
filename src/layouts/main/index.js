import { Container, Stack, Typography } from "@mui/material";
// import {  } from "phosphor-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const isAuth = true;
const AuthLayout = () => {
  if(isAuth){
    return <Navigate to="/app"/>
  }
  return (
    <>
      {/* auth layout */}
      <Container sx={{ mt: 2,  }}  maxWidth="xl" >
        <Stack spacing={2} >
          {/* logo stack */}
          <Stack
            sx={{
              width: "100%",
            }}
            direction={"column"}
            alignItems={"center"}
          >
            <Typography
              variant="h1"
              fontWeight={700}
              sx={{
                letterSpacing: "10px",
              }}
            >
              PROD
            </Typography>
            <Typography
              sx={{
                marginTop: 2,
                
                textAlign: "center",
              }}
            >
              Welcome to PROD
            </Typography>
            <Typography
              sx={{
                marginTop: 2,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              A Complete solution for your productivity !!!
            </Typography>
          </Stack>
        </Stack>
        {/* <div>Main Layout</div> */}
        <Outlet />
      </Container>
    </>
  );
};

export default AuthLayout;
