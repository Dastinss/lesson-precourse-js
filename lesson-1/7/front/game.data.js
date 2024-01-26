export const OFFER_STATUSES = {
	default: 'default',
	miss: 'miss',
	caught: 'caught'
}

export const _data = {
	// array for cells: cell = {x,y}
	settings: {
		rowsCount: 5,
		columnsCount: 4,
		pointsToWin: 10,
		maximumMisses: 3,
		decreaseDeltaInMs: 100,
		isMuted: true,
	},
	offerStatus: OFFER_STATUSES.default,
	coords: {
		offer: {
			current: {
				x: 1,
				y: 0,
			},
			previous: {
				x: 1,
				y: 2,
			},
		},
		player1: {
			current: {
				x: 2,
				y: 2,
			},
		},
	},
	score: {
		missCount: 3,
		caughtCount: 2,
	},
};

let _subscribers = []

function _notify( command ) {
	_subscribers.forEach( subscriber => subscriber( command ) )
}

let _stepIntervalId;

export function _runStepInterval() {
	_stepIntervalId = setInterval( () => {
		_missOffer();
		_moveOfferToRandomPosition( true );
		_notify( {
			type: 'missOffer',
			payload: {
				x: _data.coords.offer.current.x,
				y: _data.coords.offer.current.y,
			}
		} );
	}, 2000 );
}

// _runStepInterval(); // пердоставили запуск этой ф-ции внешнему миру

function _moveOfferToRandomPosition() {
	let newX = null;
	let newY = null;

	do {
		newX = _getRandom( _data.settings.columnsCount - 1 );
		newY = _getRandom( _data.settings.rowsCount - 1 );

		var offerIsOnNewCoords = _data.coords.offer.current.x === newX && _data.coords.offer.current.y === newY;
		var playerIsOnNewCoords = _data.coords.player1.current.x === newX && _data.coords.player1.current.y === newY;
	} while (
		offerIsOnNewCoords || playerIsOnNewCoords)

	_moveOfferToPosition(newX, newY);
}

export function _moveOfferToPosition(newX, newY) {
	_data.coords.offer.current.x = newX;
	_data.coords.offer.current.y = newY;
	_notify( { type: 'unknown' } );
}

function _missOffer() {
	_data.offerStatus = OFFER_STATUSES.miss;
	_data.score.missCount++;

	_data.coords.offer.previous = {
		..._data.coords.offer.current
	};
	setTimeout( () => {
		_data.offerStatus = OFFER_STATUSES.default;
		_notify( { type: 'unknown' } );
	}, 200 );
}

function _getRandom( N ) {
	return Math.floor( Math.random() * (N + 1) );
}

// setter
export function catchOffer() {
	_data.offerStatus = OFFER_STATUSES.caught;
	_data.score.caughtCount++;
	_data.coords.offer.previous = {
		..._data.coords.offer.current
	};
	setTimeout( () => {
		_data.offerStatus = OFFER_STATUSES.default;
		_notify( { type: 'unknown' } );
	}, 200 );

	_moveOfferToRandomPosition();
	_notify( {
		type: 'catchOffer', payload: {
			x: _data.coords.player1.current.x,
			y: _data.coords.player1.current.y,
		}
	} )
	clearInterval( _stepIntervalId );
	_runStepInterval();
}

export function subscribe( newSubscriber ) {
	_subscribers.push( newSubscriber );
}

const positionX = _data.settings.columnsCount;
const positionY = _data.settings.rowsCount;

export function movePlayer1Up() {
	_data.coords.player1.current.y = (_data.coords.player1.current.y - 1 + positionY) % positionY;
	checkCatching();
	_notify( { type: 'movePlayer1Up', payload: {} } );
}

export function movePlayer1Down() {
	_data.coords.player1.current.y = (_data.coords.player1.current.y + 1) % positionY;
	checkCatching();
	_notify( { type: 'movePlayer1Down', payload: {} } );
}

export function movePlayer1Left() {
	_data.coords.player1.current.x = (_data.coords.player1.current.x - 1 + positionX) % positionX;
	checkCatching();
	_notify( { type: 'movePlayer1Left', payload: {} } );
}

export function movePlayer1Right() {
	_data.coords.player1.current.x = (_data.coords.player1.current.x + 1) % positionX;
	checkCatching();
	_notify( { type: 'movePlayer1Right', payload: {} } );
}

// function checkCatching(){}
//========================
function checkCatching() {
	if (selectPlayer1Coords().x === selectCurrentOfferCoords().x
		&& selectPlayer1Coords().y === selectCurrentOfferCoords().y) {
		catchOffer();
	}
}

//=========================

// SELECTORS
// getter
export function selectCurrentOfferCoords() {
	return _data.coords.offer.current;
}

export function selectPreviousOfferCoords() {
	return _data.coords.offer.previous;
}

export function selectOfferStatus() {
	return _data.offerStatus;
}

export function selectPlayer1Coords() {
	return _data.coords.player1.current;
}

// ui - bll - dal
// solid, grasp, ddd
// чистая архитектура
// архитектура портов и адаптеров
// Мартин Фаулер, Рефакторинг