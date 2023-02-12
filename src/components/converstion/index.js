import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import { Stack, Box, Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowDown, Binoculars, Divide, Link, LinkSimpleHorizontal, PaperPlaneTilt, Phone, SmileySticker, TelegramLogo, VideoCamera } from "phosphor-react";
import React from "react";

// styledbadge
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// styled message input
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
const Converstion = () => {
      const theme = useTheme();
  {
    /* converstion component, used in generalApp */
  }
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* <>Chatheader</>  => receiver's profile data */}
      <Box
        p={2}
        sx={{
          height: 100,
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
          borderRadius: 1.6,
        }}
      >
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName}
                ></Avatar>
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>
          {/* icons stack */}
          <Stack direction={"row"} alignItems="center" spacing={3}>
            {/* video camera icon */}
            <IconButton>
              <VideoCamera />
            </IconButton>
            {/* phone call icon */}
            <IconButton>
              <Phone />
            </IconButton>

            {/* search */}
            <IconButton>
              <Binoculars />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <ArrowDown size={20} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* <>messages</> */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
        }}
      ></Box>
      {/* <>chat footer</> */}
      <Box
        p={2}
        sx={{
          //     height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
      //     change the background color in future if the current combonation does not look that good in future
          //      backgroundColor: theme.palette.mode==="light" ? "#fff" : theme.palette.background.default,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
          borderRadius: 1.6,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <StyledInput
            fullWidth
            placeholder="Write a Message"
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimpleHorizontal />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SmileySticker />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#fff"
                  : theme.palette.background.default,
              borderRadius: 1.6,
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
              }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Converstion;
