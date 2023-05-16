import React, { useEffect } from "react";
import Chats from "./Chats";
import { Box, Fade, Stack, Typography } from "@mui/material";
import Converstion from "../../components/converstion";
import { useTheme } from "@emotion/react";
import Contact from "../../components/contact/Contact";
import { useSelector } from "react-redux";
// import Zoom from "@mui/material/Zoom";
import { StarredMessages } from "../../components/StarredMessages";
import { SharedMessages } from "../../components/SharedMessages";
import { Spinner } from "phosphor-react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const GeneralApp = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  const userInfo = useSelector((state) => state.auth.isLoggedIn);
  const theme = useTheme();
  // todo: use useSelector method to select the data from store.
  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100vw",
      }}
    >
      {/* single chat component */}
      <Chats />
      {/*converstion */}
      {/* <Fade></Fade> */}
      <Box
        sx={{
          height: "100%",
          width: sidebar.open
            ? "calc(100vw - 420px - 320px)"
            : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8F4FA"
              : theme.palette.background.default,
        }}
      >
        {room_id !== null && chat_type === "individual" ? (
          <Converstion />
        ) : (
          <Stack
            spacing={2}
            sx={{
              height: "100%",
              width: "100%",
            }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Spinner size={400} className="loader" />
            {/* user name */}
            <Stack direction={"row"} spacing={0.7}>
              <Typography>Hello,</Typography>
              <Typography>
              </Typography>
              <Typography>
              </Typography>
            </Stack>
            <Typography variant="subtitle2">
              Select A converstion or Start A New One
            </Typography>
          </Stack>
        )}
      </Box>

      {sidebar.open && sidebar.type === "CONTACT" ? (
        <Contact />
      ) : sidebar.type === "SHARED" ? (
        <SharedMessages />
      ) : sidebar.type === "STARRED" ? (
        <StarredMessages />
      ) : null}
    </Stack>
  );
};

export default GeneralApp;
