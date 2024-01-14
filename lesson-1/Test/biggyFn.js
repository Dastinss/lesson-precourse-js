// export function BIGGY (helloCallback, byeCallback, finish) {
// 	// console.log('hello I`m BIGGY!!')
// 	// setTimeout(helloCallback, 3000);
// 	if (finish) {
// 		byeCallback();
// 	} else {
// 		helloCallback();
// 	}
// }

export function BIGGY (callBack) {
	callBack('cool ' + (new Date()).getSeconds())
}
