import styled from "@emotion/styled";
import { Alien, Archive, MagnifyingGlass, Users } from "phosphor-react";
import {
  Stack,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Avatar,
  Badge,
  useTheme,
} from "@mui/material";
// import ChatList from "../../data/index"
import { ChatList } from "../../data/index";
import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
// import { faker } from "@faker-js/faker";
import "./index.css";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatComponent from "../../components/ChatComponent";
import { useSelector, useDispatch } from "react-redux";
import { ToogleSidebarState } from "../../redux/slices/sidebar";
import Friends from "../../sections/main/Friends";
import { socket } from "../../socket";


import axios from "../../utils/axios";

const Chats = () => {
  // const token = useSelector((state)=>state.auth.token)
  const dispatch = useDispatch();
  const change = useSelector((state) => state.sidebarToggle.sidebarToggle);
  const theme = useTheme();
  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );
const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    console.log("inside useeffect chats js");
    socket.emit("get_direct_conversations", {user_id}, (data)=>{
      // data => list of curretn conversations      
    });
  }, []);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          // height: "99%",
          width: change ? "30%" : "40%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 20px rgba(0,0,0,0.25)",
          borderRadius: "10px",
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
              PROD.Messages
            </Typography>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Tooltip title="Friends">
                <IconButton
                  onClick={() => {
                    handleOpenDialog();
                  }}
                >
                  <Users size={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sidebar">
                <IconButton onClick={() => dispatch(ToogleSidebarState())}>
                  <Alien size={20} />
                </IconButton>
              </Tooltip>
            </Stack>
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
                <Typography
                  fontSize={"14px"}
                  fontWeight={"500"}
                  color="#676767"
                >
                  PROD.Messages.Archived
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
            }}
          >
            {/* pinned chats */}

            {/* <Stack spacing={1.5}></Stack> */}

            {/* todo: create all messages section */}

            <Stack spacing={1.5}>
              <Typography
                fontSize={"16px"}
                fontWeight={"800"}
                sx={{
                  color: "#676767",
                }}
              >
                PROD.Messages.All
              </Typography>
              <Divider />
            </Stack>
            <Stack overflow={"scroll"} width={"100%"}>
              {conversations
                .filter((el) => !el.pinned)
                .map((el, idx) => {
                  return <ChatComponent {...el} />;
                })}{" "}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chats;
