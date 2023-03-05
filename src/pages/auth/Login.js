import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthOmethods from "../../sections/auth/AuthOmethods";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        marginTop: "20px",
      }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      // border={"1px solid black"}
    >
      <Stack
        spacing={2}
        sx={{
          mt: 7,
          position: "relative",
        }}
      >
        <Typography variant="h6">Login To PROD</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New User ?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create An Account
          </Link>
        </Stack>
        {/* Login form  */}
        {/* other methods */}
        <LoginForm />
      </Stack>
      <AuthOmethods />
    </Stack>
  );
};

export default Login;
