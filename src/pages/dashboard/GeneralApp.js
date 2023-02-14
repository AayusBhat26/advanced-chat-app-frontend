import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Converstion from "../../components/converstion";
import { useTheme } from "@emotion/react";

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
          width: "calc(100vw - 420px)",
          backgroundColor: theme.palette.mode==="light" ? "#fff" : theme.palette.background.default,
        }}
      >

        <Converstion />

      </Box>
    </Stack>
  );
};

export default GeneralApp;
