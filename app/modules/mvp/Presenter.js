/* eslint-disable no-console */

import Model from './Model';
import togglePreloader from '../utils/togglePreloader';

class Presenter {
	constructor(view) {
		this.view = view;
	}

	sendToServer() {
		let dataToSend = this.view.getValue();

		this.view.pushLog(`данные <b>${dataToSend}</b> полетели на сервер`);
		console.log(`данные ${dataToSend} полетели на сервер`);
		togglePreloader(this.view.getElem());

		Model.sendToServer(dataToSend)
			.then(() => {
				let newValue = Model.getValue();
				this.view.setValue(newValue);
				console.log(`обработанные данные ${newValue} прилетели с сервера`);
				this.view.pushLog(`обработанные данные <b>${newValue}</b> прилетели с сервера`);
				togglePreloader(this.view.getElem());
			});
	}
}

export default Presenter;