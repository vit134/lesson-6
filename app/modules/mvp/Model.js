import serverApi from '../utils/SendToServer';

class Model {
	constructor() {
		this._val = '';
	}

	getValue() {
		return this._val;
	}

	sendToServer(data) {
		return serverApi(data)
			.then((response) => { this._val = response; });
	}
}

export default new Model;