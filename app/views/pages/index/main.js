import Store from '../../../modules/Store';
import UpdateState from '../../../modules/UpdateState';
import Actions from '../../../modules/Actions';

const input = document.querySelector('.view-stub__input');
const button = document.querySelector('.view-stub__apply');
const labelBlock = document.querySelector('.view-stub__label');
const logBlock = document.querySelector('.view-stub__log');


const initialState = {value: input.value || ''};
const store = new Store(UpdateState, initialState);

const actions = new Actions(initialState);

store.subscribe(() => insertLabel());
store.subscribe(() => log());

let _clickHandler = () => {
	let inputVal = input.value;
	store.update(actions.updateValue(inputVal));
};

let insertLabel = () => {
	console.log('store changed', store.state);
	labelBlock.innerHTML = `Сервер принял данные "<b>${store.state.value}</b>"`;
}

let log = () => {
	console.log('log - store changed', store.state);
	logBlock.innerHTML = store.state.value;
};


button.onclick =_clickHandler;


