var image;
var canvas;
function enableUpload() {
	document.getElementById("uploadButton").disabled = false;
	document.getElementById("makeItGrayButton").disabled = true;
}
function upload() {
	var file = document.getElementById("fileInput");
	if (file.files[0] != undefined) {
		image = new SimpleImage(file);
		canvas = document.getElementById("uploadCanvas")
		image.drawTo(canvas);
		document.getElementById("makeItGrayButton").disabled = false;
	}
}
function makeItGray() {
	if (image != undefined) {
		for (var pixel of image.values()) {
			var x = pixel.getX();
			var y = pixel.getY();
			var red = pixel.getRed();
			var green = pixel.getGreen();
			var blue = pixel.getBlue();
			var gray = (red + green + blue) / 3;
			pixel.setRed(gray);
			pixel.setGreen(gray);
			pixel.setBlue(gray);
			image.setPixel(x, y, pixel);
			
		}
		image.drawTo(canvas);
	}
}
