import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		userData: "",
		refreshToken: "",
		accessToken: "",
		newPostDataType: "",
		newPostDataHazardLevel: "",
		newPostDataEffectDuration: "",
		newPostDataProblem: "",
		newPostDataSolution: "",
		newPostDataDate: "",
	},
	reducers: {
		setUserData(state, action) {
			state["userData"] = action.payload;
		},
		setRefreshToken(state, action) {
			state["refreshToken"] = action.payload;
		},
		setAccessToken(state, action) {
			state["accessToken"] = action.payload;
		},
		setNewPostDataType(state, action) {
			state["newPostDataType"] = action.payload;
		},
		setNewPostDataHazardLevel(state, action) {
			state["newPostDataHazardLevel"] = action.payload;
		},
		setNewPostDataEffectDuration(state, action) {
			state["newPostDataEffectDuration"] = action.payload;
		},
		setNewPostDataProblem(state, action) {
			state["newPostDataProblem"] = action.payload;
		},
		setNewPostDataSolution(state, action) {
			state["newPostDataSolution"] = action.payload;
		},
		setNewPostDataDate(state, action) {
			state["newPostDataDate"] = action.payload;
		},
		setInitialState(state, action) {
			state = {
				userData: "",
				refreshToken: "",
				accessToken: "",
				newPostDataType: "",
				newPostDataHazardLevel: "",
				newPostDataEffectDuration: "",
				newPostDataProblem: "",
				newPostDataSolution: "",
				newPostDataDate: "",
			};
		},
	},
});

export const {
	setUserData,
	setRefreshToken,
	setAccessToken,
	setNewPostDataType,
	setNewPostDataHazardLevel,
	setNewPostDataEffectDuration,
	setNewPostDataProblem,
	setNewPostDataSolution,
	setNewPostDataDate,
	setInitialState,
} = dataSlice.actions;

export default dataSlice.reducer;
