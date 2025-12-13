import { createSlice } from "@reduxjs/toolkit";

const opportunitySlice = createSlice({
    name: "opportunities",
    initialState: {
        opportunities: []
    },
    reducers: {
        addOpportunity: (state, action) => {
            state.opportunities.push(action.payload);
        },
        removeOpportunity: (state, action) => {
            state.opportunities = state.opportunities.filter(
                (opportunity) => opportunity.id !== action.payload
            );
        },
    }
});
export const { addOpportunity, removeOpportunity } = opportunitySlice.actions;
export default opportunitySlice.reducer;