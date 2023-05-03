import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useTheme,
  // styled 
} from "@mui/material/styles";
import StyledBadge from "./Styledbadge";
import { useDispatch, useSelector } from "react-redux";


const ChatComponent = ({ id, name, img, msg, time, unread, online }) => {

  // const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light" ? "#fff" : theme.palette.background.de,
      }}
      // border={"0.4px solid black"}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
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
            <Stack width={"100%"} direction={"row"} spacing={1} justifyContent={"flex-start"} alignItems={"center"}>
              <Typography variant="subtitle2" fontSize={"16px"}>{name}</Typography>
              <Typography fontSize={"14px"}>Lvl </Typography>
            </Stack>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} direction={"column"} alignItems={"center"}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
            }}
          >
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};
export default ChatComponent;