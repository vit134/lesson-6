const UpdateState = (state, action) => {
	if (action.type === 'INCREMENT') {
		return {value: action.value};
	} else if (action.type === 'LOGING') {
		return {value: action.value};
	} else {
		return state;
	}
};

export default UpdateState;