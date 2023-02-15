import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import { Download, Image } from "phosphor-react";
import React from "react";
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
const TextMessage = ({ singleChat }) => {
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
    </Stack>
  );
};
// todo: image message component,.
const MediaMessage = ({ singleChat }) => {
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
    </Stack>
  );
};

// todo: reply message
const ReplyMessage = ({ singleChat }) => {
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
    </Stack>
  );
};

export { Timeline, TextMessage, MediaMessage, ReplyMessage, LinkMessage, DocMessage };
