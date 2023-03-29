import styled from "@emotion/styled";
import { Alien, Archive, MagnifyingGlass } from "phosphor-react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Avatar,
  Badge,
  useTheme
} from "@mui/material";
// import ChatList from "../../data/index"
import {ChatList} from '../../data/index'
import React from "react";

// import { faker } from "@faker-js/faker";
import "./index.css"
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import ChatComponent from "../../components/ChatComponent";


const Chats = ({level}) => {
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
        boxShadow: "0px 0px 20px rgba(0,0,0,0.25)",
        borderRadius:"10px"
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
              return <ChatComponent  {...singleChat} level={level}/>;
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
              return <ChatComponent {...singleChat} />;
            })}
          </Stack>
        </Stack>
        {/* <Box>
          <Typography>Lvl 0</Typography>
        </Box> */}
      </Stack>
    </Box>
  );
};

export default Chats;
