import styled from "@emotion/styled";
import { Alien, Archive, MagnifyingGlass } from "phosphor-react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  InputBase,
  alpha,
  Button,
  Divider,
  Avatar,
  Badge,
  useTheme
} from "@mui/material";
// import ChatList from "../../data/index"
import {ChatList} from '../../data/index'
import React from "react";

import { faker } from "@faker-js/faker";

// import SimpleBarStyle from '../../components/Scrollbar';
// import { SimpleBarStyle } from "../../components/Scrollbar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({id, name, img, msg, time, unread, online}) => {
   const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode==="light" ?"#fff" :theme.palette.background.de
      }}
      border={"0.4px solid black"}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.4}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} direction={"column"} alignItems={"center"}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
            }}
          >
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
// inoutbase allows us to write in input component and that blinking cursor
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Chats = () => {
  const theme = useTheme();
  return (
    // <Stack direction={"column-reverse"}>
    <Box
      sx={{
        position: "relative",
        // height: "99%",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      {/* <Stack direction={"column-reverse"}> */}
      <Stack
        p={2}
        spacing={2}
        sx={{
          height: "100vh",
        }}
      >
        <Stack
          direction={"row-reverse"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"18px"} fontWeight={"1000"}>
            Social.Messages
          </Typography>
          <IconButton>
            <Alien size={40} />
          </IconButton>
        </Stack>
        <Stack
          sx={{
            width: "100%",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" />
          </Search>
        </Stack>
        <Stack spacing={2}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Archive size={20} />
            <Button>
              <Typography fontSize={"14px"} fontWeight={"500"} color="#676767">
                Social.Messages.Archived
                {/* {theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper} */}
              </Typography>
              <Divider />
            </Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          direction={"column"}
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            scrollBehavior: "smooth",
            height: "100%",
            overflowX: "hidden",
            // "::-webkit-slider-thumb{display:none}"
          }}
        >
          {/* pinned chats */}

          <Stack spacing={1.5}>
            <Typography
              // variant="subtitle2"
              fontSize={"16px"}
              fontWeight={"800"}
              sx={{
                color: "#676767",
              }}
            >
              Social.Messages.Pinned
            </Typography>
            <Divider />

            {ChatList.filter((element) => element.pinned).map((singleChat) => {
              return <ChatElement {...singleChat} />;
            })}
            {/* todo: create a pinned messages section. */}
          </Stack>

          {/* todo: create all messages section */}
          <Stack spacing={1.5}>
            <Typography
              fontSize={"16px"}
              fontWeight={"800"}
              sx={{
                color: "#676767",
              }}
            >
              Socials.Messages.Others
            </Typography>
            <Divider />

            {ChatList.filter((element) => !element.pinned).map((singleChat) => {
              return <ChatElement {...singleChat} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
