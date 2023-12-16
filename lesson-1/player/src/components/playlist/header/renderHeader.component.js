export function renderPlaylistHeader(playlistForRendering) {
	renderPlaylistHeaderTitle(playlistForRendering);
	renderPlaylistHeaderCover(playlistForRendering);
}

function renderPlaylistHeaderCover(playlistForRendering) {
	const coverElement = document.createElement("img");
	coverElement.src = playlistForRendering.coverImageUrl;
	document.body.append(coverElement);
}

function renderPlaylistHeaderTitle(playlistForRendering) {
	const playlistTitleElement = document.createElement("h2");
	playlistTitleElement.append(playlistForRendering.title);
	document.body.append(playlistTitleElement);
}
