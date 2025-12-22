import { createSlice } from "@reduxjs/toolkit";

;
const opportunitySlice = createSlice({
    name: "opportunities",
    initialState: {
        opportunities: [
            {
                amount: 10000,
                closeDate: "2025-12-31",
                contact: "test",
                email: "test@gmail.com",
                entreprise: "test",
                id: 1,
                probability: 12,
                source: "test",
                stage: "Gagné"
            },
            {
                amount: 10000,
                closeDate: "2025-12-31",
                contact: "test",
                email: "test@gmail.com",
                entreprise: "test",
                id: 2,
                probability: 18,
                source: "test",
                stage: "Perdu"
            },
            {
                amount: 10000,
                closeDate: "2025-12-02",
                contact: "test",
                email: "test@gmail.com",
                entreprise: "test",
                id: 3,
                probability: 20,
                source: "test",
                stage: "Prospection"
            },
            {
                amount: 10000,
                closeDate: "2025-12-31",
                contact: "test",
                email: "test@gmail.com",
                entreprise: "test",
                id: 4,
                probability: 15,
                source: "test",
                stage: "Qualification"
            },
            {
                amount: 10000,
                closeDate: "2025-12-31",
                contact: "test",
                email: "test@gmail.com",
                entreprise: "test",
                id: 5,
                probability: 50,
                source: "test",
                stage: "Proposition"
            },
            {
                amount: 10000,
                closeDate: "2025-12-31",
                contact: "test",
                email: "test@gmail.com",
                entreprise: "test",
                id: 6,
                probability: 70,
                source: "test",
                stage: "Négociation"
            },

        ]
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