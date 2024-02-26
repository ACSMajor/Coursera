function upload() {
	var file = document.getElementById("fileInput").value;
	var image = new SimpleImage(file);
	var canvas = document.getElementById("uploadCanvas");
	image.drawTo(canvas);
}
