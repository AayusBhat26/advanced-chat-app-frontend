import { createSlice } from "@reduxjs/toolkit";
const initialState= {
      sidebarToggle:true, 
}
const reverseSlice = createSlice({
  name: "reverse",
  initialState,
  reducers: {
    change(state) {
      state.sidebarToggle = !state.sidebarToggle;
    },

    
  },
});
export default reverseSlice.reducer;

export function ToogleSidebarState(){
      return async(dispatch, getState)=>{
            dispatch(reverseSlice.actions.change());
      }
}