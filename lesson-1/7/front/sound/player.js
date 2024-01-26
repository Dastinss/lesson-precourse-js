import { OFFER_STATUSES, _data, subscribe } from "../../back/game.data.js";

export function Player() {
    const catchAudio = new Audio();
    // catchAudio.src = 'assets/sounds/catch.wav'
    //catchAudio.play();

    const missAudio = new Audio();
    // missAudio.src = 'assets/sounds/miss.mp3'

    let prevStatus = _data.offerStatus;

    subscribe(() => {
        if (_data.offerStatus === OFFER_STATUSES.caught && prevStatus !== OFFER_STATUSES.caught) {
            catchAudio.currentTime = 0;
            catchAudio.play();
        } else if (_data.offerStatus === OFFER_STATUSES.miss && prevStatus !== OFFER_STATUSES.miss) {
            missAudio.currentTime = 0;
            // debugger
            missAudio.play();
        }

        prevStatus = _data.offerStatus;
    })
}