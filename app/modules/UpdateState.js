const UpdateState = (state, action) => {
	if (action.type === 'INCREMENT') {
		return {value: action.value};
	} else if (action.type === 'LOG') {
		if (!state[action.counter]) {
			state[action.counter] = [];
		}

		state.push({counter: action.counter, string: action.string});
		return state;
	} else {
		return state;
	}
};

export default UpdateState;