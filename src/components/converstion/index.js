// main file for complete converstion component.
import { Stack, Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import ChatFooter from "../converstion/ChatFooter";
import Messages from "./Messages";
import "./index.css"

const Converstion = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}
    className="hideScrollbar"
    >
      {/* chat-header */}
      <Header />
      {/* <>messages</> */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <Messages />
      </Box>
      {/* <>chat footer</> */}
      <ChatFooter />
    </Stack>
  );
};

export default Converstion;
