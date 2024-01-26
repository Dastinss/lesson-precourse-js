// Создаем WebSocket объект и устанавливаем соединение
export const socket = new WebSocket('ws://localhost:8080');

let counter = 0;

socket.addEventListener('message', (messageFromBack)=>{
	console.log(messageFromBack.data)
})

setInterval( () => {
	socket.send('Hello from front' + counter);
	counter++
}, 1000 );