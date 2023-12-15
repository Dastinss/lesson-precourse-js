// data

let logoVideoList = {
	coverImageUrl: "./lesson-1/assets/images/logo-videolist.png"
}

let nameVideoLists = {
	nameHeader: "My Playlists"
}

let videolist = {
	title: "Education Videos",
	// coverImageUrl: "./lesson-1/assets/images/playlist1.png",
	info: {
		totalTracksCount: 3,
		totalTracksDurationInSeconds: 663,
	},
	videos: [
		{
			// coverImageUrl: "./lesson-1/assets/images/track1.png",
			artistName: "It-Kamasutra",
			title: "JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator",
			fileUrl: "https://www.youtube.com/watch?v=5ZBY9c4hbr8", // https://www.youtube.com/watch?v=5ZBY9c4hbr8
			isHot: false,
		},
		{
			// coverImageUrl: "./lesson-1/assets/images/track2.png",
			artistName: "It-Kamasutra",
			title: "JavaScript - The Way of the Samurai, installing VS code, code editor",
			fileUrl: "https://www.youtube.com/watch?v=5ZBY9c4hbr8", //https://www.youtube.com/watch?v=5ZBY9c4hbr8
			isHot: true,
		},
		{
			// coverImageUrl: "./lesson-1/assets/images/track2.png",
			artistName: "It-Kamasutra",
			title: "Reboot - express + typescript + nodemon / Back-end - The Samurai Way",
			fileUrl: "https://www.youtube.com/watch?v=rXfSZRI-RP8", //https://www.youtube.com/watch?v=rXfSZRI-RP8
			isHot: true,
		},
	],
};
let vodeolist2 = {
	title: "Online training sports",
	// coverImageUrl: "./lesson-1/assets/images/vodeolist2.png",
	info: {
		totalTracksCount: 3,
		totalTracksDurationInSeconds: 733,
	},
	videos: [
		{
			// coverImageUrl: "./lesson-1/assets/images/track3.png",
			artistName: "Pamela Reif",
			title: "20 MIN FULL BODY WORKOUT - Beginner Version // No Equipment I Pamela Reif",
			fileUrl: "https://www.youtube.com/watch?v=UItWltVZZmE", // https://www.youtube.com/watch?v=UItWltVZZmE
			isHot: false,
		},
		{
			// coverImageUrl: "./lesson-1/assets/images/track4.png",
			artistName: "Seva Prihodko",
			title: "Sports training online — filming and editing - Stretching Yoga",
			fileUrl: "https://www.youtube.com/watch?v=UItWltVZZmE&t=8s", //https://www.youtube.com/watch?v=UItWltVZZmE&t=8s
			isHot: true,
		},
		{
			// coverImageUrl: "./lesson-1/assets/images/track4.png",
			artistName: "BullyJuice",
			title: "PERFECT 20 MIN FULL BODY WORKOUT FOR BEGINNERS (No Equipment)",
			fileUrl: "https://www.youtube.com/watch?v=iCQ2gC4DqJw", //https://www.youtube.com/watch?v=iCQ2gC4DqJw
			isHot: true,
		},
	],
};

// render
renderHeader(logoVideoList);
renderTextHeader(nameVideoLists);


renderPlaylist( videolist ); // заменяя playlistForRendering на videolist мы тем самым переиспользоваем кусок алгоритма\кода (замыкание?)
renderPlaylist( vodeolist2 );


function renderPlaylist( playlistForRendering ) {

	renderPlaylistHeader( playlistForRendering );

	renderTrack( playlistForRendering.videos[ 0 ] );
	renderTrack( playlistForRendering.videos[ 1 ] );
	renderTrack( playlistForRendering.videos[ 2 ] );


}

function renderPlaylistHeader( playlistForRendering ) {
	// let playlistImageElement = document.createElement( "img" );
	// playlistImageElement.src = playlistForRendering.coverImageUrl;
	// document.body.append( playlistImageElement );

	let playlistTitleElement = document.createElement( "h2" );
	playlistTitleElement.append( playlistForRendering.title );
	document.body.append( playlistTitleElement );
}




//--------------------/my own code//--------------------//
function renderHeader(logoForRendering){
	let headerElement = document.createElement( "div" );
	let coverHeaderElement = document.createElement( "img" );
	coverHeaderElement.src = logoForRendering.coverImageUrl;

	headerElement.append(coverHeaderElement);
	document.body.append(headerElement);
}

function renderTextHeader(textForRendering){
	let nameHeaderElement = document.createElement( "div" );
	let textHeaderElement = document.createElement( "h1" );
	textHeaderElement = textForRendering.nameHeader;

	nameHeaderElement.append(textHeaderElement);
	document.body.append(nameHeaderElement);
}
//--------------------/my own code//--------------------//

function renderTrack( inputVideoForRendering ) {

	let trackElement = document.createElement( "div" );

	let playerElement = document.createElement( 'video' )
	playerElement.src = inputVideoForRendering.fileUrl;
	playerElement.controls = true;

	trackElement.append( playerElement );

	// let coverElement = document.createElement( 'img' )
	// coverElement.src = inputVideoForRendering.coverImageUrl;
	//
	// trackElement.append( coverElement );

	trackElement.append(
		inputVideoForRendering.artistName + " - " + inputVideoForRendering.title
	);

	document.body.append( trackElement );
}
