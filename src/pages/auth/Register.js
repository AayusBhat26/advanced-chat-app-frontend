import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthOMethods from "../../sections/auth/AuthOmethods";

const Register = () => {
  return (
    <>
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
            mt: 10,
            position: "relative",
          }}
      //     direction={"row"} // agar future mai column aacha nhi lgta hai toh row krde
      direction={"column"} 


          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack>
            <Typography variant="h6">Create an Account.</Typography>
            <Stack direction={"row"} spacing={"4px"} width={"50%"}>
              <Typography variant="body2">Already registered?</Typography>
              <Link
                component={RouterLink}
                to={"/auth/login"}
                variant="subtitle2"
              >
                LogIn
              </Link>
            </Stack>
            {/* registeration form. */}
            <RegisterForm />
            <Typography
              component={"div"}
              sx={{
                color: "text.secondary",
                mt: 3,
                typography: "caption",
                textAlign: "center",
              }}
            >
              {
                " By creating or login into the account, you are accepting our terms and conditions "
              }
              <Link underline="always" color={"text.primary"}>
                {"Terms of service "}
              </Link>
              {"and"}
              <Link underline="always" color={"text.primary"}>
                {" Privacy policy  "}
              </Link>
            </Typography>
          </Stack>
          <AuthOMethods />
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
