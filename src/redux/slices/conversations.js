import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit"; 
const user_id = window.localStorage.getItem('user_id');
const initialState = {
  direct_chat: {
    conversations: [],
    current_conversations: null,
    current_messages: [],
  },
  group_chat: {},
};
const slice = createSlice({
      name:"conversation",
      initialState, 
      reducers:{
            // fetching the list of direct conversations.
            fetchDirectConversations(state, action){
                  const list = action.payload.conversations.map((el)=>{
                        // const this_user = el.participants.find(((element)=> element._id.toString()!==user_id)
                        const this_user = el.participants.find((element)=>element._id.toString()!==user_id)
                        return {
                          id: el._id,
                          user_id: this_user._id,
                          name: `${this_user.firstName} ${this_user.lastName}`,
                          online: this_user.status === "Online",
                          img: faker.image.avatar(),
                          msg: faker.music.songName(),
                          time: "10:00",
                          unread: 0,
                          pinned: false,
                        };
                  })
                  // getting only the receiver not the sender.
                  
                  state.direct_chat.conversations = [list];
            }
      }
});

export default slice.reducer;

export const FetchDirectConversation = ({conversations})=>{
      return async (dispatch, getState)=>{
            dispatch(slice.actions.fetchDirectConversations({conversations}));
      }
}