import React from 'react';
import { faker } from "@faker-js/faker";
import {
  Stack,
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Phone,

  VideoCamera,
} from "phosphor-react";
import { useTheme, styled } from '@mui/material/styles';
import { Badge } from "@mui/material";
import {
      Binoculars, 
      ArrowDown
}from "phosphor-react";
import StyledBadge from '../StyledBadge/StyledBadge';


const Header = () => {
      const theme = useTheme();
  return (
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
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
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
  );
}

export default Header;
