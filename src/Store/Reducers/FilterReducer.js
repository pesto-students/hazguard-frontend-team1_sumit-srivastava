const initialState = {
	industry: false,
	indValue: "",
	hazard: false,
	hazValue: "",
	level: false,
	levelValue: "",
	location: false,
	locValue: "",
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case "toggle-industry":
			return { ...state, industry: !state.industry };
		case "toggle-hazard":
			return { ...state, hazard: !state.hazard };
		case "toggle-level":
			return { ...state, level: !state.level };
		case "toggle-location":
			return { ...state, location: !state.location };
		default:
			return state;
	}
};

export default filterReducer;
