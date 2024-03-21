import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Import the uuiv4 function
const initialStateForItems = {
  items: [],
  itemCount: 0,
};

const itemsSlice = createSlice({
  name: "items",
  initialState: initialStateForItems,
  reducers: {
    addItem: (state, action) => {
      //   console.log();
      const newId = uuidv4();
      state.items.push({ ...action.payload, newId });
      state.itemCount++;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.newId !== action.payload);
      state.itemCount--;
    },
    removeAll: (state, action) => {
      state.items = [];
      state.itemCount = 0;
    },
  },
});

export const { addItem, removeItem, removeAll } = itemsSlice.actions;
export default itemsSlice.reducer;
