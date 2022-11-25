import { createSlice } from "@reduxjs/toolkit";

const initial = {
	userData: "",
	refreshToken: "",
	accessToken: "",
	newPostDataIndustry: "",
	newPostDataType: "",
	newPostDataHazardLevel: "",
	newPostDataEffectDuration: "",
	newPostDataProblem: "",
	newPostDataSolution: "",
	newPostDataDateOccurred: "",
	newPostDataIsPublic: true,
	allHazards: "",
	allHazardsOfUser: "",
	allSavedHazardsOfUser: "",
	checkChange: false,
};

const dataSlice = createSlice({
	name: "data",
	initialState: initial,
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
		setNewPostDataIndustry(state, action) {
			state["newPostDataIndustry"] = action.payload;
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
		setNewPostDataDateOccurred(state, action) {
			state["newPostDataDateOccurred"] = action.payload;
		},
		setNewPostDataIsPublic(state, action) {
			state["newPostDataIsPublic"] = action.payload;
		},
		setInitialState(state, action) {
			state = initial;
		},
		setAllHazards(state, action) {
			state["allHazards"] = action.payload;
		},
		setAllHazardsOfUser(state, action) {
			state["allHazardsOfUser"] = action.payload;
		},
		setAllSavedHazardsOfUser(state, action) {
			state["allSavedHazardsOfUser"] = action.payload;
		},
		setCheckChange(state, action) {
			state["checkChange"] = !state["checkChange"];
		},
	},
});

export const {
	setUserData,
	setRefreshToken,
	setAccessToken,
	setNewPostDataIndustry,
	setNewPostDataType,
	setNewPostDataHazardLevel,
	setNewPostDataEffectDuration,
	setNewPostDataProblem,
	setNewPostDataSolution,
	setNewPostDataDateOccurred,
	setNewPostDataIsPublic,
	setInitialState,
	setAllHazards,
	setAllHazardsOfUser,
	setAllSavedHazardsOfUser,
	setCheckChange,
} = dataSlice.actions;

export default dataSlice.reducer;
