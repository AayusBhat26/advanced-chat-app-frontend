import { useTheme } from "@emotion/react";
import { Stack, Box, IconButton, TextField, InputAdornment } from "@mui/material";

import React from "react";
import Header from "./Header";
import ChatFooter from "../ChatFooter/ChatFooter";



// styled message input

const Converstion = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* chat-header */}
      <Header/>
      {/* <>messages</> */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
        }}
      ></Box>
      {/* <>chat footer</> */}
      <ChatFooter/>
      
    </Stack>
  );
};

export default Converstion;
