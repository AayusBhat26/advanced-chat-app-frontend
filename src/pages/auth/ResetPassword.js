import { Link, Stack, Typography } from '@mui/material'
import { CaretDoubleLeft } from 'phosphor-react';
import React from 'react'
import {
  Link as RouterLink
} from "react-router-dom";
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm';
const ResetPassword = () => {
  return (
    <>
      <Stack
        spacing={"15px"}
        sx={{
          mt: 10,
          mb: 5,
          position: "relative",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4" paragraph>
          Forgot Password ?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5, width:"50%"}}>
          Provide me the email address associated with your account and I will
          send you an email containing a link to reset your password
        </Typography>
        {/* reset password form here, */}
        <ResetPasswordForm/>
        <Link
          component={RouterLink}
          to="/auth/login"
          color={"inherit"}
          variant="subtitle2"
          sx={{ mt: 3, mx: "auto" }}
          alignItems={"center"}
          display={"inline-flex"}
        >
          <CaretDoubleLeft />
          Return to Sign In Page
        </Link>
      </Stack>
    </>
  );
}

export default ResetPassword
