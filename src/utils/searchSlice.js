import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    searchCacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { searchCacheResults } = searchSlice.actions;
export default searchSlice.reducer;
