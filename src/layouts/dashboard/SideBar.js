import React, { useState } from "react";
import {
  Box,
  // Divider,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  // Tooltip,
} from "@mui/material";
import Logo from "../../assets/Images/logo.png";
import { Stack } from "@mui/system";
import { Nav_Buttons, Profile_Menu } from "../../data";
// import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings";
import MaterialUISwitch from "../../components/MaterialUISwitch/MaterialUISwitch";
import {
  // Link
  useNavigate,
} from "react-router-dom";
import { LogoutUser } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "phosphor-react";
// import {useLocalStorageBoolean, useLocalStorageString} from "react-use-window-localstorage"

// import { useDispatch } from "react-redux";
// path for navigation buttons

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/app/group";
    case 2:
      return "app/call";
    case 3:
      return "/app/todo";
    case 4:
      return "/app/pomodoro";
    case 5:
      return "/app/settings";
    default:
      break;
  }
};
// menu item
const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "app/profile";
    case 1:
      return "/app/settings";
    case 2:
      // todo: jwt token bazi and set isAuth = false.
      return "/auth/login";
    default:
      break;
  }
};
const SideBar = () => {
  const change = useSelector((state) => state.sidebarToggle.sidebarToggle);

  const dispatch = useDispatch();
  const theme = useTheme();
  // console.log(theme);
  // navigate
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
 
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // navigate("/profile")
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(change);

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        height: "100vh",
        width: change ? "10vw" : "0vw",
        display: change ? "block" : "none",
        // boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        // zIndex: "10",
        borderRadius: "1px",
        // borderRight: "1px solid #292c35",
      }}
    >
      <Stack
        direction={"column-reverse"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          width: "100%",
          height: "100%",
        }}
        spacing={1}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.secondary,
              width: 64,
              height: 64,
              borderRadius: 1,
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
                  key={element.index}
                  // p={1}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 1.5,
                  }}
                >
                  {/* {console.log(element.index)} */}
                  <IconButton
                    key={element.index}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    onClick={() => {
                      navigate(getPath(element.index));
                    }}
                  >
                    {element.icon}
                    <Typography
                      variant="caption"
                      marginLeft={"5px"}
                      fontWeight={1000}
                    >
                      {element.title}
                    </Typography>
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
          {/* <Box
            sx={{
              color: "white",
              fontWeight: "400",
              margin: "10px",
              backgroundColor: "#222016",
              padding: "10px",
              borderRadius: "50%",
            }}
            // onClick={}
          >
            <ArrowLeft size={18} />
          </Box> */}
          <Avatar
            src={faker.image.avatar()}
            alt="avatar"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((singleAction, index) => {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    {/* {singleAction.title} */}
                    <Stack
                      onClick={() => {
                        // index of logout icon is 2
                        if (index === 2) {
                          dispatch(LogoutUser());
                        } else {
                          navigate(getMenuPath(index));
                        }
                      }}
                      sx={{
                        width: 100,
                      }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <span>{singleAction.title}</span>
                      {singleAction.icon}
                    </Stack>
                  </MenuItem>
                );
              })}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
