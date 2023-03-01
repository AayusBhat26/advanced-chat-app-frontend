import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data/index";
import React from "react";
import { DocMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from "./MessagesType";

const Messages = ({menu}) => {
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
                  return <MediaMessage singleChat={singleChat} menu={menu}/>
                case "doc":
                  // document
                  return <DocMessage singleChat={singleChat} menu={menu}/>;
                 
                case "link":
                  // link
                  return <LinkMessage singleChat={singleChat}  menu={menu}/>;
                case "reply":
                  // reply
                  return <ReplyMessage singleChat = {singleChat} menu={menu}/>
                default:
                  return <TextMessage singleChat={singleChat}  menu={menu}/>;
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
