import Store from '../../../modules/Store';
import UpdateState from '../../../modules/UpdateState';
import Actions from '../../../modules/Actions';

const input = document.querySelector('.view-stub__input');
const button = document.querySelector('.view-stub__apply');
const labelBlock = document.querySelector('.view-stub__label');
const logBlock = document.querySelector('.view-stub__log');

const initialStateValue = {value: input.value || ''};
const store = new Store(UpdateState, initialStateValue);

const initialStateLog = [];
const storeLog = new Store(UpdateState, initialStateLog);

const actions = new Actions();

let clickCount = 0;

store.subscribe(() => insertLabel());
storeLog.subscribe(() => log());

let _clickHandler = () => {
	let inputVal = input.value;
	sendToServer(inputVal, ++clickCount);
};

let insertLabel = () => {
	//console.log('store changed', store.state);
	labelBlock.innerHTML = `Сервер принял данные "<b>${store.state.value}</b>"`;
};

let log = () => {
	//console.log('log() ',storeLog.state);
	let lastElem = storeLog.state[storeLog.state.length - 1];
	logBlock.innerHTML += `<p>Click-${lastElem.counter}. ${lastElem.string}</p>`;

};

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}

const sendToServer = (data, clickCount) => {
	//console.log('данные', data, 'полетели на сервер');
	storeLog.update(actions.updateLog({counter: clickCount, data: `данные "<b>${data}</b>" полетели на сервер`}));

	setTimeout(function () {
		//console.log('пришел ответ от сервера', data);
		storeLog.update(actions.updateLog({counter: clickCount, data: `пришел ответ от сервера "<b>${data}</b>"`}));
		store.update(actions.updateValue(data));

	}, randomInteger(2000, 5000));
};


button.onclick = _clickHandler;


