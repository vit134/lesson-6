/* eslint-disable no-console */
import Store from '../../../modules/flux/Store';
import UpdateState from '../../../modules/flux/UpdateState';
import Actions from '../../../modules/flux/Actions';
import SendToServer from '../../../modules/utils/SendToServer';
import togglePreloader from '../../../modules/utils/togglePreloader';

const input = document.querySelector('.view-stub__input');
const button = document.querySelector('.view-stub__apply');
const labelBlock = document.querySelector('.view-stub__label p');
const logBlock = document.querySelector('.view-stub__log');

const initialStateValue = {value: input.value || ''};
const store = new Store(UpdateState, initialStateValue);

const initialStateLog = [];
const storeLog = new Store(UpdateState, initialStateLog);

const actions = new Actions();

store.subscribe(() => insertLabel());
storeLog.subscribe(() => log());

let _clickHandler = () => {
	let inputVal = input.value;

	input.value = '';

	console.log('данные', inputVal, 'полетели на сервер');
	storeLog.update(actions.updateLog({data: `данные "<b>${inputVal}</b>" полетели на сервер`}));

	togglePreloader(document);

	SendToServer(inputVal)
		.then((data) => {
			console.log('данные ', data, 'пришли с сервера');
			storeLog.update(actions.updateLog({data: `пришел ответ от сервера "<b>${data}</b>"`}));
			store.update(actions.updateValue(data));
			togglePreloader(document);
		});
};

let insertLabel = () => {
	console.log('value store changed', store.state);
	labelBlock.innerHTML = `Сервер принял данные "<b>${store.state.value}</b>"`;
};

let log = () => {
	console.log('log store changed', storeLog.state);
	let lastElem = storeLog.state[storeLog.state.length - 1];
	logBlock.innerHTML += `<p>${lastElem.string}</p>`;
};

button.onclick = _clickHandler;


