export function renderSeparator() {
	const separatorElement = document.createElement("hr")
	separatorElement.style = "border: 1px dashed red;";
	document.body.append( separatorElement);
}