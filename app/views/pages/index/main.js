import Store from '../../../modules/Store';
import UpdateState from '../../../modules/UpdateState';
import Actions from '../../../modules/Actions';

const input = document.querySelector('.view-stub__input');
const button = document.querySelector('.view-stub__apply');
const labelBlock = document.querySelector('.view-stub__label');
const logBlock = document.querySelector('.view-stub__log');


//const initialState = {value: input.value || ''};
const initialState = {
	inputValue: input.value || '',
	log: []
};

const store = new Store(UpdateState, initialState);

//const actions = new Actions(initialState);

const actions = new Actions();

console.log(actions.getActions);

actions.addAction = {name: 'UPADATE_STATE'};

//console.log(actions.updateValue('UPADATE_STATE', '123'));



/*
store.subscribe(() => insertLabel());
store.subscribe(() => log());

let _clickHandler = () => {
	let inputVal = input.value;
	sendToServer(inputVal);
};

let insertLabel = () => {
	console.log('store changed', store.state);
	labelBlock.innerHTML = `Сервер принял данные "<b>${store.state.value}</b>"`;
}

let log = () => {
	console.log('log - store changed', store.state);
	logBlock.innerHTML = store.state.log;
};

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}

const sendToServer = data => {
	console.log('данные', data, 'полетели на сервер');

	setTimeout(function () {
		console.log('пришел ответ от сервера', data);

		store.update(actions.updateValue(data));

	}, randomInteger(500, 1500));
};


button.onclick =_clickHandler;


*/
