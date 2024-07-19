function getCanvas() {
	return document.getElementById("paintCanvas");
}
function setCanvasWidth(width) {
	if (!isNaN(width))
		getCanvas().width = width;
}
function setCanvasHeight(height) {
	if (!isNaN(height))
		getCanvas().height = height;
}
function setBrushSize(size) {
	document.getElementById("brushSizeOutput").innerHTML = size;
}
function getCanvasContext() {
	return getCanvas().getContext("2d");
}
function clearCanvas() {
	var context = getCanvasContext();
	context.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
}
var isPainting = false;
function startPainting() {
	isPainting = true;
}
function stopPainting() {
	isPainting = false;
}
function doPaint() {
	if (isPainting) {
		paintCircle(event.offsetX, event.offsetY);
	}
}
function getBrushSize() {
	return document.getElementById("brushSize").value;
}
function getBrushColor() {
	return document.getElementById("brushColor").value;
}
function paintCircle(x, y) {
	var context = getCanvasContext();
	context.beginPath();
	context.arc(x, y, getBrushSize(), 0, Math.PI * 2, true);
	context.fillStyle = getBrushColor();
	context.fill();
}
