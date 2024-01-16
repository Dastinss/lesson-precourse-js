export function Image(src) {
	const image = document.createElement('img');
	image.src = src;
	return image;
}