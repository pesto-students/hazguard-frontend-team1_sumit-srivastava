import { combineReducers } from "redux";
import navbarReducer from "./NavbarReducer";
import filterReducer from "./FilterReducer";

const rootReducer = combineReducers({
	navbarReducer: navbarReducer,
	filterReducer: filterReducer,
});

export default rootReducer;
