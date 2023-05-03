import { Box, Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchFriendRequests,
  FetchFriends,
  FetchUsers,
} from "../../redux/slices/app";
import { FriendComponent, FriendRequestComponent, UserComponent } from "../../components/Friends";
const UsersList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.app);
  // console.log(users);
  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return (
    <>
      {users.map((el, idx) => {
        return <UserComponent key={el._id} {...el}>
          {el}
        </UserComponent>;
      })}
    </>
  );
};

const FriendsList = () => {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.app);
  // console.log(friends);
  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  return (
    <>
      {friends.map((el, idx) => {
        return <FriendComponent key={el._id} {...el}  />;      })}
    </>
  );
};

const RequestsList = () => {
  const dispatch = useDispatch();

  const { friendsRequests } = useSelector((state) => state.app);
  // console.log(friendsRequests);

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);

  return (
    <>
      {friendsRequests.map((el, idx) => {
        return  <FriendRequestComponent key={el._id} {...el.sender} id={el._id} />;
      })}
    </>
  );
};

const Friends = ({ open, handleClose }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      keepMounted
      onClose={handleClose}
      sx={{
        padding: 4,
      }}
    >
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Requests" />
        </Tabs>
      </Stack>
      {/* dialog content. */}
      <DialogContent>
        <Stack
          sx={{
            height: "100%",
          }}
        >
          <Stack spacing={2.5}>
            {/* IIFE function */}
            {(() => {
              switch (value) {
                case 0: // display all users.
                  return <UsersList />;
                case 1: // display friends
                  return <FriendsList />;
                case 2: // display friend requests
                  return <RequestsList />;
                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
