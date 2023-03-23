import React from "react";
import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import StyledBadge from "./Styledbadge";
import { ArrowDownLeft, ArrowUpRight, Phone } from "phosphor-react";

const CallLogElement = ({online, incoming, missed}) => {
  return (
    <>
      {/*call history  */}
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.de,
        }}
        border={"0.4px solid black"}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}

            <Stack spacing={0.4}>
              {/* <Typography variant="subtitle2">{name}</Typography> */}
              <Stack
                width={"100%"}
                direction={"row"}
                spacing={1}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                <Typography variant="subtitle2" fontSize={"16px"}>
                  {faker.name.fullName()}
                </Typography>
                {/* <Typography variant="caption">{msg}</Typography> */}
              </Stack>
              {/* icon and text together. */}
              <Stack direction={"row"} alignItems={"center"} spacing={0.5}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Today 07:43</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};
const CallElement = () => {};

export { CallElement, CallLogElement };
