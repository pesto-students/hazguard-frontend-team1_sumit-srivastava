import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		userData: {},
		refreshToken: "",
		accessToken: "",
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
	},
});

export const { setUserData, setRefreshToken, setAccessToken } = dataSlice.actions;

export default dataSlice.reducer;
