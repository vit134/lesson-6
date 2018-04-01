import random from './randomInt';

const sendToServer = data => {
	return new Promise((res) => {
		setTimeout(() => {
			res(data.toUpperCase());
		}, random(2000, 5000));
	});
};

export default sendToServer;
