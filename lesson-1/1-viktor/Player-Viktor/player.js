// data
const playList = {
	playLIstInfo: {
		playListId: '1',
		title: 'Rock Hits',
		coverImageUrl: './Player-Viktor/assets/images/classicRockHits.jpg',
		totalInfo: {
			totalTracksCount: 4,
			totalTracksDurationInSeconds: 733,
		},
	},
	tracks: [
		{
			trackId: '11',
			trackCoverImageUrl: './Player-Viktor/assets/images/californication.jpg',
			artistName: 'Red Hot Chili Peppers',
			trackTitle: 'Californication',
			trackFileUrl: './Player-Viktor/assets/audio/californication.mp3',
			trackDuration: 322,
			isHot: true,
		},
		{
			trackId: '12',
			trackCoverImageUrl: './Player-Viktor/assets/images/moneyForNothing.jpg',
			artistName: 'Dire Straits',
			trackTitle: 'Money for Nothing',
			trackFileUrl: './Player-Viktor/assets/audio/moneyForNothing.mp3',
			trackDuration: 506,
			isHot: false,
		},
	]
}


// const playListTitleEl = document.createElement('h1');
// playListTitleEl.append(playList.playLIstInfo.title);
// document.body.append(playListTitleEl);
//
// const playListCover = document.createElement('img');
// playListCover.src = playList.playLIstInfo.coverImageUrl;
// playListCover.style.width = '100px';
// // playListCover.append(playList.coverImageUrl);
// document.body.append(playListCover);
//
// const trackListEl = document.createElement('ul');
//
// const trackElement_1 = document.createElement('li');
// trackElement_1.append(playList.tracks[0].artistName + ': ' + playList.tracks[0].trackTitle);
//
// const trackElement_2 = document.createElement('li');
// trackElement_2.append(playList.tracks[1].artistName + ': ' + playList.tracks[1].trackTitle);
//
// trackListEl.append(trackElement_1, trackElement_2);
// document.body.append(trackListEl);


// render
renderPlayList(playList)

function renderPlayList(playListForRendering) {
	renderPlaylistHeader_v2(playListForRendering.playLIstInfo)
	renderTrack(playListForRendering.tracks[0])
	renderTrack(playListForRendering.tracks[1])
}

function renderPlaylistHeader_v2(anyPlayListInfo) {
	const playListTitleEl = document.createElement('h1');
	playListTitleEl.append(anyPlayListInfo.title);
	document.body.append(playListTitleEl);

	const playListCover = document.createElement('img');
	playListCover.src = anyPlayListInfo.coverImageUrl;
	playListCover.style.width = '100px';
// playListCover.append(playList.coverImageUrl);
	document.body.append(playListCover);
}

function renderTrack(anyTrack) {

	const trackEl = document.createElement('div');

	const trackCover = document.createElement('img');
	trackCover.src = anyTrack.trackCoverImageUrl;
	trackCover.style.width = '30px';
	trackCover.style.height = '30px';

	const trackAudio = document.createElement('audio');
	trackAudio.src = anyTrack.trackFileUrl;
	trackAudio.controls = true;

	trackEl.append(trackCover);
	trackEl.append(anyTrack.artistName + ': ' + anyTrack.trackTitle);
	trackEl.append(trackAudio);



	document.body.append(trackEl);


}