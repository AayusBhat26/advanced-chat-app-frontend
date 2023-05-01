import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SignleCard from "./SignleCard";
import { faker } from "@faker-js/faker";
import "./index.css"
import ComponentsDesc from "./ComponentsDesc";
import { useSelector, useDispatch } from "react-redux";
import { ToogleSidebarState } from "../../redux/slices/sidebar";
import { ArrowLeft } from "phosphor-react";
const Index = () => {
  const dispatch = useDispatch();
  const change = useSelector((state) => state.sidebarToggle.sidebarToggle);

  return (
    <Stack
      height={"100%"}
      maxHeight={"100vh"}
      maxWidth={"100vw"}
      width={change?"88vw":"100vw"}
    >
      <Box
        display={"fkex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        marginTop={"20px"}
        
        
      >
        <ArrowLeft   cursor={"pointer"} onClick={() => dispatch(ToogleSidebarState())}  />
        <Button onClick={() => dispatch(ToogleSidebarState())}  sx={{marginLeft:'20px', textAlign:"center"}}>
          <Typography variant="h6">Sidebar</Typography>
        </Button>
      </Box>
      {/* header */}
      <Stack>
        <Box>
          <Stack padding={2}>
            <Stack direction={"column"} padding={3}>
              <Typography fontSize={"20px"} fontWeight={"1000"}>
                Hello, {faker.name.firstName()}
              </Typography>
              <Typography fontSize={"12px"}>
                {faker.music.songName()}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* cards */}
      <Stack direction={"row"}>
        {/* single card */}
        <SignleCard />
        <Stack direction={"row"}>
          {/*  */}
          <ComponentsDesc />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Index;
