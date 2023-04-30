import { createSlice } from "@reduxjs/toolkit";

// import { dispatch } from "../store";

// initial state.
const initialState = {
  // since we have to show multiple components, therefore setting a intital state to display the contact information only.
  sidebar: {
    open: false,
    // type: "CONTACT",
    // other possible values could be:
    // starred messges, shared documents, link and media.
    type:"", 
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


export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}
export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}