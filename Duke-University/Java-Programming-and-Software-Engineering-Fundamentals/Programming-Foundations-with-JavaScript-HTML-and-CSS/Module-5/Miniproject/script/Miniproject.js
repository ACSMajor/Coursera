var image;
var grayFilter;
var redFilter;
var greenFilter;
var blueFilter;
var canvas;
function upload() {
	var file = document.getElementById("fileInput");
	if (file.files[0] != undefined) {
		image = new SimpleImage(file);
		canvas = document.getElementById("uploadCanvas")
		image.drawTo(canvas);
	}
}
function makeItGray() {
	if (image != undefined) {
		if (grayFilter != undefined)
			grayFilter.drawTo(canvas);
		else {
			grayFilter = new SimpleImage(image.getWidth(), image.getHeight());
			for (var pixel of image.values()) {
				var x = pixel.getX();
				var y = pixel.getY();
				var red = pixel.getRed();
				var green = pixel.getGreen();
				var blue = pixel.getBlue();
				var avg = (red + green + blue) / 3;
				var grayPixel = grayFilter.getPixel(x, y);
				grayPixel.setRed(avg);
				grayPixel.setGreen(avg);
				grayPixel.setBlue(avg);
				
			}
			grayFilter.drawTo(canvas);
		}
	}
}
function makeItRed() {
	if (image != undefined) {
		if (redFilter != undefined)
			redFilter.drawTo(canvas);
		else {
			redFilter = new SimpleImage(image.getWidth(), image.getHeight());
			for (var pixel of image.values()) {
				var x = pixel.getX();
				var y = pixel.getY();
				var red = pixel.getRed();
				var green = pixel.getGreen();
				var blue = pixel.getBlue();
				var avg = (red + green + blue) / 3;
				var redPixel = redFilter.getPixel(x, y);
				if (avg < 128) {
					redPixel.setRed(avg * 2);
					redPixel.setGreen(0);
					redPixel.setBlue(0);
				} else {
					redPixel.setRed(255);
					redPixel.setGreen(avg * 2 - 255);
					redPixel.setBlue(avg * 2 - 255);
				}
			}
			redFilter.drawTo(canvas);
		}
	}
}
function makeItGreen() {
	if (image != undefined) {
		if (greenFilter != undefined)
			greenFilter.drawTo(canvas);
		else {
			greenFilter = new SimpleImage(image.getWidth(), image.getHeight());
			for (var pixel of image.values()) {
				var x = pixel.getX();
				var y = pixel.getY();
				var red = pixel.getRed();
				var green = pixel.getGreen();
				var blue = pixel.getBlue();
				var avg = (red + green + blue) / 3;
				var greenPixel = greenFilter.getPixel(x, y);
				if (avg < 128) {
					greenPixel.setRed(0);
					greenPixel.setGreen(avg * 2);
					greenPixel.setBlue(0);
				} else {
					greenPixel.setRed(avg * 2 - 255);
					greenPixel.setGreen(255);
					greenPixel.setBlue(avg * 2 - 255);
				}
			}
			greenFilter.drawTo(canvas);
		}
	}
}
function makeItBlue() {
	if (image != undefined) {
		if (blueFilter != undefined)
			blueFilter.drawTo(canvas);
		else {
			blueFilter = new SimpleImage(image.getWidth(), image.getHeight());
			for (var pixel of image.values()) {
				var x = pixel.getX();
				var y = pixel.getY();
				var red = pixel.getRed();
				var green = pixel.getGreen();
				var blue = pixel.getBlue();
				var avg = (red + green + blue) / 3;
				var redPixel = blueFilter.getPixel(x, y);
				if (avg < 128) {
					redPixel.setRed(0);
					redPixel.setGreen(0);
					redPixel.setBlue(avg * 2);
				} else {
					redPixel.setRed(avg * 2 - 255);
					redPixel.setGreen(avg * 2 - 255);
					redPixel.setBlue(255);
				}
			}
			blueFilter.drawTo(canvas);
		}
	}
}
function clearFilters() {
	if (image != undefined)
		image.drawTo(canvas);
}
