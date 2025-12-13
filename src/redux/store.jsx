import { configureStore } from "@reduxjs/toolkit";
import opportunityReducer from "../redux/OpportunitySlice.jsx";

export const store = configureStore({
  reducer: {
    opportunity: opportunityReducer
  }
});
