import { Box, Divider, Link, Stack, Typography } from '@mui/material'
import React from 'react';
import{
  Link as RouterLink
} from "react-router-dom";
import AuthOmethods from '../../sections/auth/AuthOmethods';

const Login = () => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      // alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack
        spacing={2}
        // direction={""}
        sx={{
          mt: 8,
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
        <AuthOmethods />
      </Stack>

      {/* <Stack
        direction={"row"}
        marginTop={6}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      > */}
      {/* other login options */}
      {/* <Typography variant="h6">w1</Typography>
        <Typography variant="h6">w1</Typography>
        <Typography variant="h6">w1</Typography>
      </Stack> */}
    </Stack>
  );
}

export default Login
