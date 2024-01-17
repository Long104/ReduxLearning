import { createSlice } from "@reduxjs/toolkit";

const goalsSlice = createSlice({
	name: "goal",
	initialState: {
		lastId: 1,
		goalList: [],
	},
	reducers: {
		addGoal: (state, action) => {
			if (action.payload.name === "") return;
			state.lastId++;
			state.goalList.push({
				id: state.lastId,
				name: action.payload.name,
				isDone: false,
			});
		},
		checkGoal: (state, action) => {
			const goal = state.goalList.find((g) => g.id === action.payload.id);
			if (goal) {
				goal.isDone = !goal.isDone;
			}
		},
		removeGoal: (state, action) => {
			const goalIdRemove = action.payload.id;
			state.goalList = state.goalList.filter(
				(goal) => goal.id !== goalIdRemove
			);
		},
	},
});

export const { addGoal, checkGoal, removeGoal } = goalsSlice.actions;
export default goalsSlice.reducer;
