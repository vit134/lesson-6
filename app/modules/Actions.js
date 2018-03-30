export default class Actions {
	updateValue(value) {
		return {type: 'INCREMENT', value: value};
	}

	loging(value) {
		return {type: 'LOGING', value: value};
	}
}

/*
export default {
	incrementAction: {type: 'INCREMENT', amount: 5},
	decrementAction: {type: 'DECREMENT', amount: 3}
};
*/

/*export default (value) => {
	return {type: 'INCREMENT', value: value};
};*/

/*export default {
	updateValue: {type: 'INCREMENT', value: value},
	log: {type: 'INCREMENT', value: value}
}*/
