import {
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import {
  LinkSimpleHorizontal,
  PaperPlaneTilt,
  SmileySticker,
} from "phosphor-react";
import { useTheme } from "@emotion/react";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
const ChatFooter = () => {
  const theme = useTheme();
  return (
    <Box
      p={2}
      sx={{
        //     height: 100,
        // backgroundColor: "#F8FAFF",
        //     change the background color in future if the current combonation does not look that good in future
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
        borderRadius: 1.6,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <StyledInput
          fullWidth
          color="black"
          placeholder="Messages.new"
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
  );
};

export default ChatFooter;
