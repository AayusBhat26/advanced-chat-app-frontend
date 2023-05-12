import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

// import { dispatch } from "../store";

// initial state.
const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
  snackbar: {
    open: null,
    message: null,
    severity: null,
  },
  users: [], // all users of app who are not friends and not requested yet
  all_users: [],
  friends: [], // all friends
  friendRequests: [], // all friend requests
  chat_type: null,
  room_id: null,
  call_logs: [],
  user: {
    firstName: "",
    lastName: "",
    email: "",
    level: "",
    status: "",
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
    openSnackBar(state, action) {
      // console.log(action.payload);
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackBar(state) {
      console.log("This is getting executed");
      state.snackbar.open = false;
      state.snackbar.message = null;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateAllUsers(state, action) {
      state.all_users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
    userDetails(state, action) {
      // state.user.firstName = action.payload.firstName;
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.email = action.payload.email;
      state.user.level = action.payload.level;
      state.user.status = action.payload.status
    },
  },
});
export default slice.reducer;

export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackBar());
};

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };

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

export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friends",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-requests",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        dispatch(
          slice.actions.updateFriendRequests({
            requests: response.data.data,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const SelectConversation = ({ room_id }) => {
  return (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
};

export function UpdateUserDetails() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/getme/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data[0].firstName);
        dispatch(
          slice.actions.userDetails({
            firstName: response.data.data[0].firstName,
            lastName: response.data.data[0].lastName,
            email: response.data.data[0].email,
            level: response.data.data[0].level,
            status: response.data.data[0].status,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
