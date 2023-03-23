import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

// initial state.
const initialState = {
  // since we have to show multiple components, therefore setting a intital state to display the contact information only.
  sidebar: {
    open: false,
    // type: "CONTACT",
    // other possible values could be:
    // starred messges, shared documents, link and media.
    type:"", 
    level:5,
  },
};

// creating a slice.
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // reducers will update the initial state.
    // todo: 1. create a toggle sidebar.
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    updateLevel(state, action){
      state.sidebar.level = action.payload.level
    }
  },
});
export default slice.reducer;

// toggle sidebar.
export function ToggleSidebar() {
  // todo: return an async function.
  // since we are not using sort of payload in the togglesidebar function above, so do not require any payload.
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}
// update sidebar type
export function UpdateSidebarType(type) {
  return async () => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

// update level 
export function UpdateLevel(level){
  return async()=>{
    dispatch(
      slice.actions.updateLevel({
        level
      })
    )
  }
}