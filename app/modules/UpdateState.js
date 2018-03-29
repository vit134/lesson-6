const UpdateState = (state, action) => {
	if (action.type === 'INCREMENT') {
		return {count: state.count + action.amount};
	} else if (action.type === 'DECREMENT') {
		return {count: state.count - action.amount};
	} else {
		return state;
	}
};

exports.default = UpdateState;