import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DotsThreeVertical, Download, Image } from "phosphor-react";
import React, { useState } from "react";
import { Message_options } from "../../data";
// TODO: create a timeline component
const Timeline = ({ singleChat }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {/* {
            console.log(theme.palette.text)
      } */}
      <Divider width="46%" />
      <Typography
        variant="caption"
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        {singleChat.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};
// todo: text message component
const TextMessage = ({ singleChat, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={singleChat.incoming ? "start" : "end"}
    >
      <Box
        p={1.25}
        sx={{
          borderRadius: 1.25,
          backgroundColor: singleChat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
        width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={singleChat.incoming ? theme.palette.text : "#fff"}
        >
          {singleChat.message}
        </Typography>
      </Box>
      <Box>{menu && <MessageOptions />}</Box>
    </Stack>
  );
};
// todo: image message component,.
const MediaMessage = ({ singleChat, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={singleChat.incoming ? "start" : "end"}
    >
      <Box
        p={1.25}
        sx={{
          borderRadius: 1.25,
          backgroundColor: singleChat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          width: "max-content",
        }}
      >
        <Stack
          spacing={1.25}
          p={1.25}
          borderRadius={"15px"}
          sx={{
            backgroundColor: theme.palette.mode == "dark" ? "#292c2e" : "#fff",
          }}
        >
          <img
            src={singleChat.img}
            alt={singleChat.message}
            style={{
              maxHeight: 210,
              borderRadius: "10px",
            }}
          />
          <Typography
            variant="body2"
            ccolor={singleChat.incoming ? theme.palette.text : "#fff"}
          >
            {singleChat.message}
          </Typography>
        </Stack>
      </Box>
      <Box>{menu && <MessageOptions />}</Box>
    </Stack>
  );
};

// todo: reply message
const ReplyMessage = ({ singleChat, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={singleChat.incoming ? "start" : "end"}
    >
      <Box
        p={1.25}
        sx={{
          backgroundColor: singleChat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.25,
          width: "max-content",
        }}
      >
        <Stack spacing={1.24} direction={"column"}>
          <Stack
            p={1.25}
            direction={"column"}
            spacing={1.25}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1.25,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {singleChat.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={singleChat.incoming ? theme.palette.text : "#fff"}
          >
            {singleChat.reply}
          </Typography>
        </Stack>
      </Box>
      <Box>{menu && <MessageOptions />}</Box>
    </Stack>
  );
};
// todo: link message
const LinkMessage = ({ singleChat }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={singleChat.incoming ? "start" : "end"}
    >
      <Box
        p={1.25}
        sx={{
          backgroundColor: singleChat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.25,
          width: "max-content",
        }}
      >
        <Stack spacing={1.25}>
          <Stack
            p={1.25}
            spacing={1.25}
            alignItems={"start"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1.25,
            }}
          >
            <img
              src={singleChat.preview}
              alt={singleChat.message}
              style={{
                maxHeight: 210,
                borderRadius: "10px",
              }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">test image message</Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.primary.main,
                }}
                component={Link}
                to={"//https:github.com"}
              >
                {" "}
                github.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={singleChat.incoming ? theme.palette.text : "#fff"}
            >
              {singleChat.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box>
        <MessageOptions />
      </Box>
    </Stack>
  );
};
// todo: create a document message
const DocMessage = ({ singleChat }) => {
  const theme = useTheme();
  return (
    <Stack
      spacing={1.25}
      direction={"row"}
      justifyContent={singleChat.incoming ? "start" : "end"}
    >
      <Box
        p={1.25}
        sx={{
          backgroundColor: singleChat.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.25,
          width: "max-content",
        }}
      >
        <Stack spacing={1.25} direction={"column"}>
          <Stack
            p={2}
            direction={"row"}
            spacing={3}
            alignItems={"center"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1.25,
            }}
          >
            <Image size={44} />
            <Typography variant="caption"> Image.png</Typography>
            <IconButton>
              <Download />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            color={singleChat.incoming ? theme.palette.text : "#fff"}
          >
            {singleChat.message}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <MessageOptions />
      </Box>
    </Stack>
  );
};
const MessageOptions= () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeVertical
        size={22}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((singleAction) => {
            return (
              <MenuItem onClick={handleClick}>
                <Stack sx={{
                  width: "100px",
                }}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                > 
                  <span>{singleAction.title}</span>
                  {singleAction.icon}
                </Stack>
              </MenuItem>
            );
          })}
        </Stack>
      </Menu>
    </>
  );
};
export {
  Timeline,
  TextMessage,
  MediaMessage,
  ReplyMessage,
  LinkMessage,
  DocMessage,
};
