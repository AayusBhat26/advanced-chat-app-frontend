import React from "react";
import Chats from "./Chats";
import { Box } from "@mui/material";

const GeneralApp = () => {

  return (
   <Box sx={{
    display:"flex", 
    // justifyContent:''
   }}>
    <Chats/>
   </Box>
  );
};

export default GeneralApp;
