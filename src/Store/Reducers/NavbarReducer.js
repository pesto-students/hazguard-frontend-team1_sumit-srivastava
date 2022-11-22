const initialState = {
	toggle: false,
	navbar: false,
};

const navbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "toggle-navbar":
			return { ...state, navbar: !state.navbar };
		case "toggle-filter":
			return { ...state, toggle: !state.toggle };
		default:
			return state;
	}
};

export default navbarReducer;
