import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data/index";
import React from "react";
import { DocMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from "./MessagesType";

const Messages = () => {
  return (
    <Box p={2.5}>
      <Stack spacing={3}>
        {Chat_History.map((singleChat) => {
          switch (singleChat.type) {
            case "divider":
              // Timeline
              return <Timeline singleChat={singleChat} />;
             
            case "msg":
              switch (singleChat.subtype) {
                case "img":
                  // image
                  return <MediaMessage singleChat={singleChat}/>
                case "doc":
                  // document
                  return <DocMessage singleChat={singleChat}/>;
                 
                case "link":
                  // link
                  return <LinkMessage singleChat={singleChat} />;
                case "reply":
                  // reply
                  return <ReplyMessage singleChat = {singleChat}/>
                default:
                  return <TextMessage singleChat={singleChat} />;
              }
             
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messages;
