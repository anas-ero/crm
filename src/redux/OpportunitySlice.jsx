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
        updateOpportunity: (state, action) => {
            const index = state.opportunities.findIndex(
                (opp) => opp.id === action.payload.id
            );
            if (index !== -1) {
                state.opportunities[index] = action.payload;
            };
        },
        deleteOpportunity: (state, action) => {
            state.opportunities = state.opportunities.filter(
                (opportunity) => opportunity.id !== action.payload
            );
        }
    }
});
export const { addOpportunity, removeOpportunity, updateOpportunity, deleteOpportunity } = opportunitySlice.actions;
export default opportunitySlice.reducer;