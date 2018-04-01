const UpdateState = (state, action) => {
	if (action.type === 'INCREMENT') {
		return {value: action.value};
	} else if (action.type === 'LOG') {
		state.push({string: action.string});
		return state;
	} else {
		return state;
	}
};

export default UpdateState;