import { useTheme } from '@emotion/react'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { ArrowLeft, ArrowRight, Stack } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateSidebarType } from '../redux/slices/app'
// import { ToggleSidebar, UpdateSidebarType } from "../../redux/slices/app";

const SharedMessages = () => {
      const theme = useTheme();
      const dispatch = useDispatch();
  return (
    //    <Box></Box>
    <Box
      sx={{
        width: 320,
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
            borderRadius: 1.6,
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            height: "max-content",
          }}
        >
          {/* header */}
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
            <Typography>Media</Typography>
            <Tooltip title="Close">
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              >
                <ArrowLeft size={28} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default SharedMessages
