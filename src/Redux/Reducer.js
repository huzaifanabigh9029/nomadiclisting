import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    dir: "ltr",
  },
  reducers: {
    Direction: (state, actions) => {
      state.dir = actions.payload;
    },
  },
});
export const { Direction, VisibleHome } = counterSlice.actions;
export default counterSlice.reducer;
