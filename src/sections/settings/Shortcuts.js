import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Shortcuts = ({ open, handleClose }) => {
  // shortcut lists
  const keyboardShortcutsList = [
    {
      key: 0,
      title: "Close this dialog",
      combination: ["Ctrl/CMD", "Shift", "x"],
    },
    {
      key: 1,
      title: "Mute",
      combination: ["Ctrl/CMD", "Shift", "M"],
    },
    {
      key: 2,
      title: "Archive Chat",
      combination: ["Ctrl/CMD", "Shift", "E"],
    },
    {
      key: 3,
      title: "Delete Chat",
      combination: ["Ctrl/CMD", "Shift", "D"],
    },
    {
      key: 4,
      title: "Pin Chat",
      combination: ["Ctrl/CMD", "Shift", "P"],
    },
    {
      key: 5,
      title: "Search",
      combination: ["Ctrl/CMD", "F"],
    },
    {
      key: 6,
      title: "Search Chat",
      combination: ["Ctrl/CMD", "Shift", "F"],
    },
    {
      key: 7,
      title: "Next Chat",
      combination: ["Ctrl/CMD", "N"],
    },
    {
      key: 8,
      title: "Next Step",
      combination: ["Ctrl", "Tab"],
    },
    {
      key: 9,
      title: "Previous Step",
      combination: ["Ctrl", "Shift", "Tab"],
    },
    {
      key: 10,
      title: "New Group",
      combination: ["Ctrl/CMD", "Shift", "N"],
    },
    {
      key: 11,
      title: "Profile & About",
      combination: ["Ctrl/CMD", "P"],
    },
    {
      key: 12,
      title: "Increase speed of voice message",
      combination: ["Shift", "."],
    },
    {
      key: 13,
      title: "Decrease speed of voice message",
      combination: ["Shift", ","],
    },
    {
      key: 14,
      title: "Settings",
      combination: ["Shift", "S"],
    },
    {
      key: 15,
      title: "Emoji Panel",
      combination: ["Ctrl/CMD", "E"],
    },
    {
      key: 16,
      title: "Sticker Panel",
      combination: ["Ctrl/CMD", "S"],
    },
    {
      key: 17,
      title: "Mark as unread",
      combination: ["Ctrl/CMD", "Shift", "U"],
    },
  ];
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        keepMounted
        sx={{
          p: 4,
        }}
        TransitionComponent={Transition}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {keyboardShortcutsList.map(({ key, title, combination }) => {
              return (
                <Grid key={key} item xs={6}>
                  <Stack
                    sx={{ width: "100%" }}
                    justifyContent={"space-between"}
                    spacing={3}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="body2" fontSize={14} key={key}>
                      {title}
                    </Typography>

                    {/* buttons */}
                    <Stack spacing={2} direction={"row"}>
                      {combination.map((singleCombination) => {
                        return (
                          <Button
                            disabled
                            variant="contained"
                            sx={{ color: "#212121" }}
                          >
                            {singleCombination}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
