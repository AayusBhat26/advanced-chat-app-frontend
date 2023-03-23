import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";

// invisible scroll
import "./index.css";
import { CallLogElement } from "../../components/CallElement";



const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAF2"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            padding={3}
            spacing={2}
            sx={{
              maxHeight: "100vh",
            }}
          >
            <Stack direction={"column"}>
              <Typography variant="h5">Call</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "Search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant="subtitle2"
                component={Link}
                sx={{ cursor: "pointer" }}
              >
                Logs
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Plus
                  style={{
                    color: theme.palette.primary.main,
                  }}
                />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={3}
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              {/* todo: customize scrollbar through css. */}
              <Stack spacing={1}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  New 
                </Typography>
               {/* previous call history list */}
               <CallLogElement online={true} incoming={true} missed={true}/>
              </Stack>
              <Stack spacing={2}>
                {/* <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Groups
                </Typography> */}
                {/* chat list  */}
                {/* {ChatList.filter((element) => !element.pinned).map(
                  (singleChat) => {
                    return <ChatComponent {...singleChat} />;
                  }
                )} */}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Call;
