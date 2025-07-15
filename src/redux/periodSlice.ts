import { createSlice } from "@reduxjs/toolkit";

type Period = "monthly" | "quarterly" | "yearly";

interface PeriodState {
  selectedPeriod: Period;
}

const initialState: PeriodState = {
  selectedPeriod: "monthly",
};

const periodSlice = createSlice({
  name: "period",
  initialState,
  reducers: {
    setPeriod: (state, action) => {
      state.selectedPeriod = action.payload;
    },
  },
});

export const { setPeriod } = periodSlice.actions;
export default periodSlice.reducer;
