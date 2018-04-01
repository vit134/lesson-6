import Presenter from './Presenter';

class View {
	constructor(elem) {
		this._elem = elem;
		this._input = this._elem.querySelector('.view-stub__input');
		this._label = this._elem.querySelector('.view-stub__label p');
		this._preloader = this._elem.querySelector('.preloader');
		this._log = this._elem.querySelector('.view-stub__log');
		this.presenter = new Presenter(this);
		this.bindEvents();
	}

	bindEvents() {
		this._elem.querySelector('.view-stub__apply')
			.addEventListener('click', this.clickHandler.bind(this));
	}

	clickHandler() {
		this.presenter.sendToServer();
		this._input.value = '';
	}

	getElem() {
		return this._elem;
	}

	getValue() {
		return this._input.value;
	}

	setValue(value) {
		this._label.innerHTML = `сервер принял данные ${value}`;
	}

	pushLog(value) {
		let p = document.createElement('p');
		p.innerHTML = value;

		this._log.appendChild(p);
	}

	togglePreloader() {
		this._preloader.classList.toggle('hidden');
	}
}

export default View;