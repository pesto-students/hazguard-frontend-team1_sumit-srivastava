const initialState = {
	toggle: false,
	navbar: false,
	industry: false,
	hazard: false,
	level: 1,
	location: "",
};

const navbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "toggle-navbar":
			return { ...state, navbar: !state.navbar };
		case "toggle-filter":
			return { ...state, toggle: !state.toggle };
		case "toggle-industry":
			return { ...state, industry: !state.industry };
		case "toggle-hazard":
			return { ...state, hazard: !state.hazard };
		case "toggle-level":
			return { ...state, level: state.level };
		case "toggle-location":
			return { ...state, location: state.location };
		default:
			return state;
	}
};

export default navbarReducer;
