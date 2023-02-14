
import { Stack, Box } from "@mui/material";

import React from "react";
import Header from "./Header";
import ChatFooter from "../converstion/ChatFooter";
import Messages from "./Messages";



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
      >
        <Messages/>


      </Box>
      {/* <>chat footer</> */}
      <ChatFooter/>
      
    </Stack>
  );
};

export default Converstion;