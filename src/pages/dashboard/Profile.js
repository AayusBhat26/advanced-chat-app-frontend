import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAF2"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* header */}
            <Stack
              direction={"row"}
              alignItems={"center"} // => y axis
              //   justifyContent={"center"} => x axis
              spacing={3}
            >
              <IconButton>
                <CaretLeft size={24} color="#4B4B4D" />
              </IconButton>
              <Typography variant="h4">Profile</Typography>
            </Stack>
            {/* profile form  */}
            <ProfileForm/>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
