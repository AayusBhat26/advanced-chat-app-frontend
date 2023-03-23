import React from "react";
import { Box, Stack } from "@mui/material";

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
                  
            </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
