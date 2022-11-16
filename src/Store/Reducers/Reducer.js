const initialState = {
	toggle: false,
};

const toggleMenu = (state = initialState, action) => {
	switch (action.type) {
		case "toggle-filter":
			return { toggle: !state.toggle };
		default:
			return state;
	}
};

export default toggleMenu;
