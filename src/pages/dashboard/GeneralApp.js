import React from "react";
import Chats from "./Chats";
import { Box, Fade, Stack } from "@mui/material";
import Converstion from "../../components/converstion";
import { useTheme } from "@emotion/react";
import Contact from "../../components/contact/Contact";
import { useSelector } from "react-redux";
// import Zoom from "@mui/material/Zoom";
import { StarredMessages } from "../../components/StarredMessages";
import { SharedMessages } from "../../components/SharedMessages";
// import "./index.css";

const GeneralApp = () => {
  const theme = useTheme();
  // todo: use useSelector method to select the data from store.
  const { sidebar } = useSelector((store) => store.app);

  // const returnSwitch=(param)=>{
  //   switch (param) {
  //     case "CONTACT":
  //       return <Contact />;
  //     case "SHARED":
  //       return <SharedMessages />;
  //     case "STARRED":
  //       return <StarredMessages />;

  //     case undefined:
  //       return <></>
  //     default:
  //       return ""
  //   }
  // }
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
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
        <Converstion />
      </Box>
      {/* {sidebar.type === "CONTACT" ? (
        <Contact />
      ) : sidebar.type === "SHARED" ? (
        <SharedMessages />
      ) : sidebar.type === "STARRED" ? (
        <StarredMessages />
      ) : null} */}
      {
        sidebar.open && sidebar.type==="CONTACT"? (<Contact/>) :(sidebar.type==="SHARED" ? <SharedMessages/> :(sidebar.type === "STARRED" ? <StarredMessages /> : null))
      }
    </Stack>
  );
};

export default GeneralApp;
