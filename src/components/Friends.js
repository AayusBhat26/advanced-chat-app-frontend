import { Avatar, Box, Button, Stack, Typography, IconButton } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { socket, connectSocket } from "../socket";
import React from "react";
import StyledBadge from "./Styledbadge";
import { ChatsTeardrop } from "phosphor-react";
const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));
const UserComponent = ({ firstName, lastName, _id, online, img, level }) => {
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;
  const user_id = window.localStorage.getItem("user_id");
  return (
    <StyledChatBox
      sx={{
        padding: "16px",
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            {/* <Typography variant="caption">{truncateText(msg, 20)}</Typography> */}
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            socket.emit(
              "friend_request",
              {
                to: _id,
                from: user_id,
              },
              () => {
                alert("request sent.");
              }
            );
          }}
        >
          Send Request
        </Button>
      </Stack>
    </StyledChatBox>
  );
};

const FriendRequestComponent = ({
  firstName,
  lastName,
  _id,
  online,
  img,
  level,
  id, // request id, for firend request model
}) => {
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;
  const user_id = window.localStorage.getItem("user_id");
  return (
    <StyledChatBox
      sx={{
        padding: "16px",
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            {/* <Typography variant="caption">{truncateText(msg, 20)}</Typography> */}
          </Stack>
        </Stack>
        <Button
          onClick={() => {
            socket.emit(
              "accept_request",
              {
              request_id:id, 
              },
              () => {
                alert("request sent.");
              }
            );
          }}
        >
          Accept Request
        </Button>
      </Stack>
    </StyledChatBox>
  );
};
const FriendComponent = ({ firstName, lastName, _id, online, img, level }) => {
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;
//   const user_id = window.localStorage.getItem("user_id");
  return (
    <StyledChatBox
      sx={{
        padding: "16px",
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            {/* <Typography variant="caption">{truncateText(msg, 20)}</Typography> */}
          </Stack>
        </Stack>
        {/* <Button
          onClick={() => {
            socket.emit(
              "friend_request",
              {
                to: _id,
                from: user_id,
              },
              () => {
                alert("request sent.");
              }
            );
          }}
        >
          Send Request
        </Button> */}
        {/* with iconbuttyon user can start conversation with their friends. */}

        <IconButton onClick={()=>{
            // start a new converstaion or go to previou convo.
        }}>
          <ChatsTeardrop />
        </IconButton>
      </Stack>
    </StyledChatBox>
  );
};
export { UserComponent, FriendRequestComponent, FriendComponent };
