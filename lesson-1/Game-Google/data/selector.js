import { data } from "./game.data.js";

//getters
export function selectCurrentOfferCoords() { // создали буфер (промежуточный селектор) для передачи данных
	return data.coords.offer.current;
}

export function selectPreviousOfferCoords() { // создали буфер (промежуточный селектор) для передачи данных
	return data.coords.offer.previous;
}

export function selectOfferStatus() { // создали буфер (промежуточный селектор) для передачи данных
	return data.offerStatus;
}

export function selectPlayer1Cords() {
	return data.coords.player1.current;
}