export default function createImageFromInitials(size, initials, backgroundColor, fontColor) {
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	canvas.width = canvas.height = size;
	context.fillStyle = backgroundColor;
	context.fillRect(0, 0, size, size);
	context.fillStyle = fontColor;
	context.textBaseline = "middle";
	context.textAlign = "center";
	context.font = `40px Inter`;
	context.fillText(initials, size / 2, size / 2);
	return canvas.toDataURL();
}
