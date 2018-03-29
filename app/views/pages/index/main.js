import Store from '../../../modules/Store';
import UpdateState from '../../../modules/UpdateState';
import Actions from '../../../modules/Actions';


//require('../../../modules/reducer');

const input = document.querySelector('.view-stub__input');

const initialState = input.value;

const store = new Store(UpdateState, initialState);
store.subscribe(() => console.log('state changed2', store.state));

store.update(Actions.incrementAction);
//unsubscribe();
store.update(Actions.decrementAction);

store.update({});


