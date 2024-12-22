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
function doPaint(event) {
	if (isPainting) {
		var paintCoord = calcPaintCoord(event);
		paintCircle(paintCoord.x, paintCoord.y);
	}
}
function touchPaint(event) {
	if (isPainting) {
		event.preventDefault();
		var paintCoord = calcPaintCoord(event);
		paintCircle(paintCoord.x, paintCoord.y);
	}
}
function calcPaintCoord(event) {
	var x;
	var y;
	var canvas = getCanvas();
	if (event.touches == undefined) {
		x = event.offsetX;
		y = event.offsetY;
	} else {
		var touch = event.touches[0];
		var boundingClientRect = canvas.getBoundingClientRect();
		x = touch.clientX - boundingClientRect.left;
		y = touch.clientY - boundingClientRect.top;
	}
	var xScale = canvas.width / canvas.clientWidth;
	var yScale = canvas.height / canvas.clientHeight;
	if (xScale > 1)
		x *= xScale;
	if (yScale > 1)
		y *= yScale;
	return {x, y};
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
