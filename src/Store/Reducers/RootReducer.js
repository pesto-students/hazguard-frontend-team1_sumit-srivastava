import { combineReducers } from "redux";
import toggleMenu from "./Reducer";

const rootReducer = combineReducers({
	reducer: toggleMenu,
});

export default rootReducer;
