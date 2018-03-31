/*export default class Actions {
	updateValue(value) {
		return {type: 'UPDATE', value: value};
	}
}*/

/*

Класс Action

get -
	возвращает массив _actions
set -
	принимает action.name,
	добавляет action в массив _actions

updateState -
	принимает action.name,
	добавляет в action значение value,
	возвращает объект {action.name, action.value}

 */


export default class Actions {
	constructor() {
		this._actions = {};
	}

	get getActions() {
		return this._actions;
	}

	set addAction(action) {

		if (this._actions[action]) {
			throw 'Action с таким именем уже зарегестрирован';
		}

		this._actions[action.name] = {
			type: action.name
		};
		
		//console.log(this._actions);
	}

	updateValue(action, value) {
		//console.log(value);
		this._actions[action].value = value;

		return this._actions[action];
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
