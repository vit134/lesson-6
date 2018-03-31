const UpdateState = (state, action) => {
	if (action.type === 'UPDATE') {
		return {value: action.value};
	}
};

export default UpdateState;