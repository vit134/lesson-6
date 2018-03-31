/*function sendToServer(data) {
	console.log(data);

	var event = new CustomEvent('dataIsSent', { detail: data });

	document.dispatchEvent(event);
}*/


function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}


export default (data) => {
	console.log('данные', data, 'полетели на сервер');

	setTimeout(function () {
		console.log('пришел ответ от сервера', data);

	}, randomInteger(500, 1500));
};


// Пример обработки события dataIsSent. Рекомендуется изменить API модуля так,
// чтобы вызова события через document не было

// function test() {
//     document.addEventListener('dataIsSent', function(event) {
//         console.log('event got ' + event.detail);
//     });
//     sendToServer('mydata');
// }