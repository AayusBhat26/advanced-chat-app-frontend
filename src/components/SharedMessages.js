import { Box, IconButton, Stack, Tab, Tooltip, Typography, Tabs, Grid } from "@mui/material";
import {
  useTheme
} from "@mui/material/styles"
import React, { useState } from "react";

import {  UpdateSidebarType } from "../redux/slices/app";
import { ArrowLeft, } from "phosphor-react";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import { Shared_Documents, Shared_Links } from "../data";
import { DocMessage, LinkMessage } from "./converstion/MessagesType";
const SharedMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // tabs state 
  const [tabState, setTabState] = useState(0);
  const handleTabStateChange = (event, newValue)=>{
    setTabState(newValue);
  }
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
      }}
      // borderRadius={"10px so"}
    >
      <Stack
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
            // borderRadius: 1.6,
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            height: "max-content",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={"24px"}
            sx={{
              height: "100%",
              padding: "16px",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <Tooltip title="Contact Information">
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              >
                <ArrowLeft size={28} />
              </IconButton>
            </Tooltip>
            <Typography variant="caption"> Media, link and others</Typography>
          </Stack>
        </Box>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            sx={{ pt: "4px" }}
            value={tabState}
            onChange={handleTabStateChange}
            centered
          >
            <Tab label="Media" />
            <Tab label="Links" />
            <Tab label="Documents" />
          </Tabs>
        </Box>
        {/* body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={1}
          spacing={tabState === 1 ? 1 :3}
        >
          {
       
            tabState === 0 ? (
              <Grid container spacing={2}>
                {[0, 1, 2, 3, 4, 5, 6].map((ele) => {
                  return (
                    <Grid item xs={4}>
                      <img
                        src={faker.image.avatar()}
                        alt={faker.name.fullName()}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            ) : tabState === 1 ? (
              <Stack direction={"column"} spacing={1}>
                {Shared_Links.map((ele) => {
                  return <LinkMessage singleChat={ele} />;
                })}
              </Stack>
            ) : tabState === 2 ? (
              <Stack direction={"column"} spacing={1}>
                {Shared_Documents.map((ele) => {
                  return <DocMessage singleChat={ele} />;
                })}
              </Stack>
            ) : (
              ""
            )
          }
        </Stack>
      </Stack>
    </Box>
  );
};

export { SharedMessages };
