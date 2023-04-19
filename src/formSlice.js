import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    weightInput: "",
    heightInput: "",
    result: ""
  },
  reducers: {
    setWeight: (state, action) => {
      state.weightInput = action.payload;
    },
    setHeight: (state, action) => {
      state.heightInput = action.payload;
    },
    calculateBMI: (state, action) => {
      state.result = action.payload[0] * action.payload[1];
    }
  }
});

export const { setHeight, setWeight, calculateBMI } = formSlice.actions;

export default formSlice.reducer;
