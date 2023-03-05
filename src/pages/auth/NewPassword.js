import { Link, Stack, Typography } from "@mui/material";
import { CaretDoubleLeft } from "phosphor-react";
import React from "react";
import {
      Link as RouterLink
} from "react-router-dom"
import NewPasswordForm from "../../sections/auth/NewPasswordForm";
const NewPassword = () => {
  return (
    <>
      <Stack
        spacing={"15px"}
        sx={{
          mt: 6,
          mb: 5,
          position: "relative",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h4" paragraph>
          Reset Password
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5, width: "50%" }}  textAlign={"center"}>
          Set your new password
        </Typography>
      </Stack>
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
      {/* new password form  */}
      <NewPasswordForm/>
    </>
  );
};

export default NewPassword;
