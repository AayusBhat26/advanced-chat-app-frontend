import { Dialog, DialogContent, Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { FetchFriendRequests, FetchFriends, FetchUsers } from '../../redux/slices/app';
const UserList = ()=>{

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(FetchUsers())
  }, [])
  const {users} = useSelector((state)=>state.app)
  return (
    <>
    {users.map((ele, index)=>{
      // todo: component for rendering. 
      return <></>
    })}
    
    </>
  )
}
const FriendsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFriends());
  }, []);
  const { friends } = useSelector((state) => state.app);
  return (
    <>
      {friends.map((ele, index) => {
        // todo: component for rendering.
        return <></>;
      })}
    </>
  );
};
const RequestList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);
  const { friendsRequests } = useSelector((state) => state.app);
  return (
    <>
      {friendsRequests.map((ele, index) => {
        // todo: component for rendering.
        return <></>;
      })}
    </>
  );
};
const Friends = ({open, handleClose}) => {
      const [value, setValue] = useState(0);
      const handleChange = (event, newValue)=>{
            setValue(newValue);
      }
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
                return <UserList />;
                case 1: // display friends
                return <FriendsList />;
                case 2: // display friend requests
                return <RequestList />;
                default:
                  break;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default Friends