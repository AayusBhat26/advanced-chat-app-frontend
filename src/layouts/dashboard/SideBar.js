import React, { useState } from 'react'
import { Box, Divider, IconButton, Avatar, Switch } from "@mui/material";
import Logo from "../../assets/Images/logo.png";
import { Stack } from "@mui/system";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import {
      useTheme
} from "@mui/material/styles";
import useSettings from '../../hooks/useSettings';
import MaterialUISwitch from '../../components/MaterialUISwitch/MaterialUISwitch';

const SideBar = () => {
      const theme = useTheme();
      // console.log(theme);
      const [selected, setSelected] = useState(0);
      const { onToggleMode } = useSettings();
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
        width: 100,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          height: "100%",
        }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              width: 64,
              height: 64,
              borderRadius: 2.5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              alt="icon"
              width={"40px"}
              height={"40px"}
              style={{
                marginLeft: "-5px",
              }}
            />
          </Box>

          <Stack
            direction={"column"}
            alignItems={"center"}
            spacing={3}
            sx={{
              width: "max-content",
            }}
          >
            {Nav_Buttons.map((element) =>
              element.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    key={element.index}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                  >
                    {element.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(element.index);
                  }}
                  key={element.index}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  {element.icon}
                </IconButton>
              )
            )}
            <Divider
              sx={{
                width: "50px",
              }}
            />
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        {/* user avatar  + switch */}

        <Stack spacing={4} justifyContent={"center"} alignItems={"center"}>
          <MaterialUISwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar src={faker.image.avatar()} alt="avatar" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideBar
