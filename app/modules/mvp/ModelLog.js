class Model {
	constructor() {
		this._val = [];
	}

	getValue() {
		return this._val;
	}

	/*sendToServer(data) {
		return serverApi(data)
			.then((response) => { this._val = response; });
	}*/

	addLog(newLog) {
		this._val.push(newLog);
	}
}

export default new Model;