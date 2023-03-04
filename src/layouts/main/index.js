import { Container, Stack, Typography } from "@mui/material";
// import {  } from "phosphor-react";
import React from "react";
import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <>
      {/* auth layout */}
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          {/* logo stack */}
          <Stack
            sx={{
              width: "100%",
            }}
            direction={"column"}
            // alignItems={"center"}
          >
            <Typography
              variant="h1"
              fontWeight={1000}
              sx={{
                letterSpacing: "100px",
              }}
            >
              PROD
            </Typography>
            <Typography
              sx={{
                marginTop: 2,
                fontWeight: 900,
                textAlign:"center"
              }}
            >
              Welcome to PROD
            </Typography>
            <Typography
              sx={{
                marginTop: 2,
                fontWeight: 800,
                textAlign:"center"
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
