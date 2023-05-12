import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  // const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.auth.isLoggedIn);
  // useEffect(()=>{
  //   if (!userInfo) {
  //     navigate("/auth/login");
  //   }
  // }, [])
  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        // user,
        // setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
