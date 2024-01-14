import { data } from "../../../data/game.data.js";

export function Scores () {
	const containerElement = document.createElement('div');

	containerElement.append('caught: ' + data.score.caughtCount + '; miss: ' + data.score.missCount + ';')

	return containerElement;
}