import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BellRinging, CaretLeft, Image, Info, Key, Keyboard, Lock, Notebook, PaintRoller } from "phosphor-react";
import { faker } from "@faker-js/faker";

import React, { useState } from "react";
import Shortcuts from "../../sections/settings/Shortcuts";
import "./index.css"
// todo: create a right and left panel for settings page.

const Settings = () => {
  const theme = useTheme();
  // keyboard shortcuts closing andopening state.
  const [keyboardShortcutState, setKeyboardShortcutState] = useState(false);
  // handler function for keyboard shortcuts
  const handleOpenKeyboardShortcuts= ()=>{
    setKeyboardShortcutState(true);
  }
   const handleCloseKeyboardShortcuts = () => {
    setKeyboardShortcutState(false);
   };
  // creating a list for setting items
  const handleOpenTheme = () => {};
  const handleOpenShortcuts = () => {};
  const settingList = [
    {
      key: 0,
      icon: <BellRinging />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PaintRoller />,
      title: "Theme",
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Notebook />,
      title: "Request Account Inforamtion",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenKeyboardShortcuts,
    },
    {
      key: 7,
      icon: <Info />,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* left panel  */}
        <Stack direction={"column"}>
          <Box
            sx={{
              overflowY: "scroll",
              // overflow:"hidden",
              scrollBehavior: "smooth",
              height: "100vh",
              width: "330px",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#F8FAF2"
                  : theme.palette.background,
              boxShadow: " 0px 0px 2px rgba(0,0,0,0.25)",
            }}
          >
            {/* title */}
            <Stack direction={"row"} alignItems={"center"} spacing={3} marginTop={"10px"} marginBottom={10}>
              <IconButton>
                <CaretLeft size={24} color="#4B4B4B" />
              </IconButton>
              <Typography variant="h5">Settings</Typography>
            </Stack>
            <Stack p={4} spacing={5} direction={"column-reverse"}>
              {/* title */}
              {/* profile picture */}
              {/* setting options  */}
              {/* options: notification, security, theme, wallpaper, keyboard shortcuts, help */}

              {/* title stack end  */}

              {/* profile picture stack */}
              <Stack direction={"row"} spacing={3}>
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                  sx={{
                    width: 56,
                    height: 56,
                  }}
                />
                <Stack spacing={0.5}>
                  {/* name */}
                  <Typography variant="article">
                    {faker.name.fullName()}
                  </Typography>
                  {/* bio */}
                  <Typography variant="body2">
                    {faker.random.words()}
                  </Typography>
                </Stack>
              </Stack>
              <Stack spacing={4}>
                {settingList.map(({ key, icon, title, onclick }) => {
                  return (
                    <Stack
                      spacing={2}
                      onClick={onclick}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      {/* internal stack => single */}
                      <Stack
                        direction={"row"}
                        spacing={2}
                        alignItems={"center"}
                      >
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Box>
        </Stack>
        {/* right panel */}
      </Stack>
      {keyboardShortcutState && (
        <Shortcuts
          open={keyboardShortcutState}
          handleClose={handleCloseKeyboardShortcuts}
        />
      )}
    </>
  );
};

export default Settings;
