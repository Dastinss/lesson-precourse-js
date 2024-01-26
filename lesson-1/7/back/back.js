import { WebSocketServer } from 'ws';
import {
	_runStepInterval,
	movePlayer1Down,
	movePlayer1Left,
	movePlayer1Right,
	movePlayer1Up,
	subscribe
} from "./game.data.js";

const wss = new WebSocketServer( { port: 8080 } );

const channels = [];

wss.on( 'connection', function connection( channel ) { // бек энд получает сообщение
	channels.push( channel )
	channel.on( 'message', function message( command ) {
		if (Buffer.isBuffer(command)){
			command = command.toString();
		}
		console.log(command);
		switch (command) {
			case 'movePlayer1Up':
				movePlayer1Up();
				break;
			case 'movePlayer1Down':
				movePlayer1Down();
				break;
			case 'movePlayer1Right':
				movePlayer1Right();
				break;
			case 'movePlayer1Left':
				movePlayer1Left();
				break;
		}
	} );
} );

subscribe( ( command ) => { //подписались на изменения и получив инфо об изменениях мы отправляем инфо в канал
	channels.forEach( channel => {
		channel.send( JSON.stringify(command) )
	} )
} )

_runStepInterval();
