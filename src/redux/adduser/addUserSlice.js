import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Import the uuiv4 function
const initialStateForItems = {
  usersList: [],
};

const usersListSlice = createSlice({
  name: "usersList",
  initialState: initialStateForItems,
  reducers: {
    addUser: (state, action) => {
      //   console.log();
      const newId = uuidv4();
      state.usersList.push({ ...action.payload, newId });
    },
    removeUser: (state, action) => {
      state.usersList = state.usersList.filter(
        (item) => item.newId !== action.payload
      );
    },
    removeAllUser: (state, action) => {
      state.usersList = [];
    },
  },
});

export const { addUser, removeUser, removeAllUser } = usersListSlice.actions;
export default usersListSlice.reducer;
