import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Stack } from "@mui/system";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { SelectConversation, showSnackbar } from "../../redux/slices/app";
// import { AddDirectConversation, UpdateDirectConversations } from "../../redux/slices/conversation";
// import { AddDirectConversation, UpdateDirectConversation } from "../../redux/slices/conversations";
// const isAuth = true;
import {
  UpdateDirectConversation,
  AddDirectConversation,
  AddDirectMessage,
  UpdateDirectConversations,
} from "../../redux/slices/conversation";
const DashboardLayout = () => {
  const dispatch = useDispatch();
  // todo: create a redux slice
  const { isLoggedIn } = useSelector((state) => state.auth);
  const user_id = window.localStorage.getItem("user_id");
  const { conversations, current_conversation } = useSelector(
    (state) => state.conversation.direct_chat
  );
  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + `#loaded`;
          window.location.reload();
        }
      };
      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }

      // events
      // 1. new friend request.
      socket.on("new_friend_request", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: data.message,
          })
        );
      });
      socket.on("request_accepted", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: data.message,
          })
        );
      });
      socket.on("request_sent", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: data.message,
          })
        );
      });
      
    }
    socket.on("new_message", (data) => {
      console.log("inside new message event");
      const message = data.message;
      console.log(current_conversation, data);
      // check if msg we got is from currently selected conversation
      if (current_conversation?.id === data.conversation_id) {
        dispatch(
          AddDirectMessage({
            id: message._id,
            type: "msg",
            subtype: message.type,
            message: message.text,
            incoming: message.to === user_id,
            outgoing: message.from === user_id,
          })
        );
      }
    });
    socket.on("start_chat", (data) => {
      console.log(data);
      const exisiting_conversation = conversations.find(
        (ele) => ele.id.toString() === data._id
      );
      if (exisiting_conversation) {
        // any conversation, return it
        dispatch(
          UpdateDirectConversations({
            conversation: data,
          })
        );
      } else {
        // add new conversation
        dispatch(
          AddDirectConversation({
            conversation: data,
          })
        );
      }
      dispatch(SelectConversation({ room_id: data._id }));
    });
  }, [isLoggedIn, socket]);
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
