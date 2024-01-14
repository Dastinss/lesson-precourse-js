import { data } from "../../../../data/game.data.js";

export function Cell( x, y ) {
	const cellEl = document.createElement( 'td' )
	// cellEl.append( x + '-' + y );

	if (x === data.coords.current.x && y === data.coords.current.y) {
		const offerEl = document.createElement( 'img' );
		offerEl.src = 'assets/images/offer.png';
		cellEl.append( offerEl );
	}

	if (x === data.coords.caught.x && y === data.coords.caught.y) {
		const offerEl = document.createElement( 'img' );
		offerEl.src = 'assets/images/caught-offer.png';
		cellEl.append( offerEl );
	}

	if (x === data.coords.missed.x && y === data.coords.missed.y) {
		const offerEl = document.createElement( 'img' );
		offerEl.src = 'assets/images/missed-offer.png';
		cellEl.append( offerEl );
	}

	return cellEl;
}

