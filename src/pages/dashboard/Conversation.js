import React from 'react'
import { ChatState } from '../../Context/ChatProvider'
import { Box } from '@mui/material'

const Conversation = () => {
      const {selectedChat} = ChatState()
  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none"}}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      single chat
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
}

export default Conversation