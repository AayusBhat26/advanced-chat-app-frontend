import React from "react";
import Chats from "./Chats";
import { Box, Fade, Stack } from "@mui/material";
import Converstion from "../../components/converstion";
import { useTheme } from "@emotion/react";
import Contact from "../../components/contact/Contact";
import { useSelector } from "react-redux";
// import Zoom from "@mui/material/Zoom";
import "./index.css";
import SharedMessages from "../../components/SharedMessages";
const GeneralApp = () => {
  const theme = useTheme();
  // todo: use useSelector method to select the data from store.
  // const app = useSelector((store)=>store.app);
  // console.log(app);
  const { sidebar } = useSelector((store) => store.app);
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
      {/* {sidebar.open && <Contact/>} */}
      {/* {
        sidebar.open && (()=>{
          switch (sidebar.type) {
            case "contact":
              <Contact />;
              break
            case "SHARED":
               <SharedMessages />;
               break;
            default:
              break;
          }
        })
      } */}
      {
      //  <SharedMessages></SharedMessages>
      // //   sidebar.type === "CONTACT" ? <Contact /> : (sidebar.type==="SHARED" ? <SharedMessages/> : (sidebar.type==="STARRED" ? 
      //   // "" :<></>))
      sidebar.type==="CONTACT" ? <Contact/> :(sidebar.type==="SHARED" ? <SharedMessages/> : (sidebar.type==="STARRED" ? "starred messages" :"nothing"))
      }
    </Stack>
  );
};

export default GeneralApp;
