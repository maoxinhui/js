window.onload = function() {
	var img = document.getElementsByTagName("img");
	img[0].onclick = function() {
		document.body.style.backgroundImage="url(static/img/1.jpg)";
	}
	img[1].onclick = function() {
		document.body.style.backgroundImage="url(static/img/2.jpg)";
	}
	img[2].onclick = function() {
		document.body.style.backgroundImage="url(static/img/3.jpg)";
	}
	img[3].onclick = function() {
		document.body.style.backgroundImage="url(static/img/4.jpg)";
	}
	img[4].onclick = function() {
		document.body.style.backgroundImage="url(static/img/5.jpg)";
	}
}