import {
	_data,
	movePlayer1Down,
	movePlayer1Left,
	movePlayer1Right,
	movePlayer1Up,
	// updatePlayerPosition
} from "../../../../back/game.data.js";
import { Cell } from "./cell/cell.component.js";
import { socket } from "../../../ws.js";
import { _moveOfferToPosition } from "../../../game.data.js";

export function Grid() {
	const containerElement = document.createElement( 'table' );

	for (let y = 0; y < _data.settings.rowsCount; y++) {
		const row = document.createElement( 'tr' );

		for (let x = 0; x < _data.settings.columnsCount; x++) {
			const cell = Cell( x, y );
			row.append( cell );
		}

		containerElement.append( row );
	}

	socket.addEventListener( 'message', ( event ) => {
		// let command = event.data;
		let command = JSON.parse( event.data ) //превращаем текст в объект с помощью метода

		switch (command.type) {
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
			case 'missOffer':
			case 'catchOffer':
				_moveOfferToPosition( command.payload.x, command.payload.y );
				break;

		}
	} )

	window.addEventListener( 'keydown',
		( e ) => {
			// console.log( "e.code: ", e.code );
			// console.log( "e.key: ", e.key );
			switch (e.code) {
				case "ArrowUp":
					socket.send( 'movePlayer1Up' );
					// movePlayer1Up();
					break;
				case "ArrowDown":
					socket.send( 'movePlayer1Down' );
					// movePlayer1Down();
					break;
				case "ArrowRight":
					socket.send( 'movePlayer1Right' );
					// movePlayer1Right();
					break;
				case "ArrowLeft":
					socket.send( 'movePlayer1Left' );
					// movePlayer1Left();
					break;
			}
		} );

	return containerElement;
}

