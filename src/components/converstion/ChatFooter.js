import {
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
  Fab,
  Tooltip, 
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Camera,
  File,
  Image,
  LinkSimpleHorizontal,
  PaperPlaneTilt,
  SmileySticker,
  Sticker,
  User,
} from "phosphor-react";
import { useTheme } from "@emotion/react";

//-------------------------emoji-pikcer-react--------------
import EmojiPicker from "emoji-picker-react";
//---------------------------------------------------------

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

// -------------------------------------------------------
//  message sending actions 
const actions = [
  {
    title: "Photo/Video",
    color: "#4DA5FE",
    y: 102,
    icon: <Image size={24} />,
  },
  {
    title: "Stickers",
    color: "#4DA5FE",
    y: 172,
    icon: <Sticker size={24} />,
  },
  {
    title: "Image",
    color: "#1b8cfe",
    y: 242,
    icon: <Camera size={24} />,
  },
  {
    title: "Document",
    color: "#0172e4",
    y: 312,
    icon: <File size={24} />,
  },
  {
    title: "Contact",
    color: "#0159b2",
    y: 382,
    icon: <User size={24} />,
  },
];
// -------------------------------------------------------


const ChatInput = ({ setOpenEmoji,  }) => {
  // state for new message action
  const [action, setAction] = useState(false);
  const theme = useTheme();
  return (
    <StyledInput
      fullWidth
      color="black"
      placeholder="Messages.new"
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{width:"max-content"}}>
            {/* actions stack */}
            <Stack sx={{position:"relative", display:action ? "inline-block": "none" }}>
              {
                actions.map((singleAction)=>{
                  return (
                    <Fab
                      sx={{
                        position: "absolute",
                        top: -singleAction.y,
                        backgroundColor: singleAction.color,
                        color:"#FFF"
                      }}
                    >
                      <Tooltip title={singleAction.title} placement="right" >
                        <IconButton>{singleAction.icon}</IconButton>
                      </Tooltip>
                    </Fab>
                  );
                })
              }
            </Stack>
            <InputAdornment>
              <IconButton onClick={()=>setAction((old)=>!old)}>
                <LinkSimpleHorizontal />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SmileySticker
                onClick={() => {
                  setOpenEmoji((old) => !old);
                }}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};


const ChatFooter = () => {
  const theme = useTheme();
  const [openEmoji, setOpenEmoji] = useState(false);
  return (
    <Box
    
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
        borderRadius: 1.6,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Stack sx={{
          width: "100%",
        }}>
          {/* emoji picker box */}
          <Box
            sx={{
              display: openEmoji ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: "75px",
              right: "85px",
            }}
          >
            <EmojiPicker theme={theme.palette.mode} />
          </Box>
          <ChatInput setOpenEmoji={setOpenEmoji}  />
        </Stack>
        {/* chat input */}
        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.default,
            borderRadius: 1.6,
          }}
        ></Box>

        <Stack
          sx={{
            height: "100%",
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IconButton>
            <PaperPlaneTilt color="#fff" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatFooter;
