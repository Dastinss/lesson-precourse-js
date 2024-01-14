import {BIGGY} from './biggyFn.js';

// export function callBack (e) {
// 	alert(e.ctrlKey)
// }
//
// const container = document.createElement('div')
// const buttonElement = document.createElement('button');
// buttonElement.append('call Fn')
// buttonElement.addEventListener('click', callBack)
//
// container.append(buttonElement);
// return container;
//


export function sayHi (event){
	// debugger;
	console.log('Say Hi')
}

const buttonElement = document.createElement('button');
buttonElement.innerHTML = "Нажми меня";
document.body.append(buttonElement)

buttonElement.addEventListener('click', sayHi)

// setTimeout(sayHi, 2000);
// setInterval(sayHi, 3000)


//=================== 2rd CallBack =====================//
function sayBy (){
	console.log('By by, dear friend...')
}

function saySmth (message) {
	// const btn = document.createElement('button');
	// btn.innerHTML = (message);
	// document.append(btn)
	const btn = document.createElement('button');
	btn.innerHTML = (message);
	document.body.append(btn)
	btn.addEventListener('click', sayBy)
	console.log(message)

}

BIGGY(saySmth);

//=================== 3rd CallBack =====================//
function sum (a, b) {
	console.log('testing call back')
	// debugger
	console.log(a+b)
}

function Biggy2 (callBack) {
	callBack(2,5)
}

Biggy2(sum);