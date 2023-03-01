import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowRight, Bell, Divide, Flag, Phone, Prohibit, Star, Trash, VideoCamera } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../../redux/slices/app";
import { faker } from "@faker-js/faker";
// import MaterialUISwitch from "../MaterialUISwitch/MaterialUISwitch";
import AntSwitch from "../AntSwitch";

// transition for dialogs for smooth transtitoi.
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// dialgo component
const BlockDialog = ({open, handleClose})=>{
  return (
    <Dialog
      fullWidth
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Block This Contact"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Block</Button>
      </DialogActions>
    </Dialog>
  );
}

// deleteDialog
const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog fullWidth
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete Chat History"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
};
const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseBlock = ()=>{
    setOpenBlock(false);
  
  }
  const handleCloseDelete = ()=>{
    setOpenDelete(false);
  }
  return (
    <Box
      className="test"
      sx={{
        width: 320,
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          height: "100vh",
        }}
      >
        <Box
          sx={{
            // boxShadow:
            //   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
            borderRadius: 1.6,
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            height: "max-content",
          }}
        >
          {/* header */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={"24px"}
            sx={{
              height: "100%",
              padding: "16px",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <Typography>User Information</Typography>
            <Tooltip title="Close">
              <IconButton
                onClick={() => {
                  dispatch(ToggleSidebar());
                }}
              >
                <ArrowRight size={28} />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            scrollBehavior: "smooth",
          }}
          p={"24px"}
          spacing={"24px"}
        >
          {/* avatar + name + phone number. */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              width: "100%",
            }}
            spacing={"16px"}
          >
            {/* avatar */}
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{
                height: 56,
                width: 56,
              }}
            />
            {/* name and number stack */}
            <Stack direction={"column"} alignItems={"center"}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.firstName()}
              </Typography>
              <Typography variant="caption">{faker.phone.number()}</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            {/* voice and video call  */}
            <Tooltip title="Phone call">
              {/* voice call stack */}
              <Stack direction={"column"} spacing={1} alignItems={"center"}>
                <Phone size={24} />
                <Typography variant="overline">Phone</Typography>
              </Stack>
            </Tooltip>

            <Tooltip title="Video call">
              {/* video call stack */}
              <Stack direction={"column"} spacing={1} alignItems={"center"}>
                <VideoCamera size={24} />
                <Typography variant="overline">Video</Typography>
              </Stack>
            </Tooltip>
          </Stack>
          <Divider />
          {/* about stack */}
          <Stack justifyContent={"row"} spacing={2}>
            <Typography variant="article" fontSize={"20px"}>
              About
            </Typography>
            <Typography variant="overline" fontSize={"14px"}>
              Hi, test about.
            </Typography>
          </Stack>
          <Divider />

          {/* media, links and docs */}
          {/* outer stacks */}

          {/* inner stack */}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle" fontSize={"13px"}>
              Media, links and docs
            </Typography>
            {/* media count and right arrow for complete view of media, links and docs */}
            <Button
              onClick={() => {
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<ArrowRight />}
            >
              2629
            </Button>
          </Stack>
          {/* image for image,doc and links */}
          <Stack direction={"row"} spacing={"16px"} alignItems={"center"}>
            {[1, 2, 3, 4].map((el) => (
              <Box>
                <img src={faker.image.cats()} alt={faker.name.firstName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={"24px"} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("STARRED"));
              }}
            >
              <ArrowRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={"24px"} />
              <Typography variant="subtitle2">Mute User</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>
          <Divider />
          {/* growps in common */}
          <Typography>n-Groups In Common</Typography>
          <Stack direction={"row"} alignItems="center" spacing={2}>
            <Avatar src={faker.image.people()} alt={faker.name.firstName()} />
            <Stack spacing={0.5}>
              {/* common group name */}
              <Typography variant="subtitle2" fontSize={"14px"}>
                Common Group Name
              </Typography>
              {/* people in group. */}
              <Typography variant="caption" fontSize={"12px"}>
                Mem1, mem2, mem3, you
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          {/* block user and delete chats with  user. */}
          <Stack alignItems={"center"} spacing={"20px"} direction={"row"}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Prohibit />}
              onClick={() => {
                setOpenBlock(true);
              }}
            >
              <Typography fontSize={"16px"}>Block</Typography>
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<Trash />}
              onClick={() => {
                setOpenDelete(true);
              }}
            >
              <Typography fontSize={"16px"}>Delete</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {/* dialogs */}

      {openBlock && (
        <BlockDialog open={openBlock} handleClose={handleCloseBlock} />
      )}
      {openDelete && (
        <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />
      )}
    </Box>
  );
};

export default Contact;
