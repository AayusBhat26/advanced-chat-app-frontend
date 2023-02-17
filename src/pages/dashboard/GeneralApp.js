import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Converstion from "../../components/converstion";
import { useTheme } from "@emotion/react";
import Contact from "../../components/contact/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
      }}
    >
      {/* single chat component */}
      <Chats />
      {/*converstion */}
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px - 320px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8F4FA"
              : theme.palette.background.default,
        }}
      >
        <Converstion />
      </Box>

      {/* contact information. */}
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
