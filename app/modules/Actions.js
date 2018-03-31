export default class Actions {
	updateValue(value) {
		return {type: 'INCREMENT', value: value};
	}

	updateLog(value) {
		return {type: 'LOG', string: value.data, counter: value.counter};
	}
}