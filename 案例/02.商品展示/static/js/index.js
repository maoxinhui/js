window.onload = function() {
	var img = document.getElementsByTagName("img");
	var show_up = document.getElementsByClassName("show_up")[0];
	img[0].onmouseover = function() {
		show_up.style.backgroundImage = "url(static/img/01big.jpg)";
	}
	img[1].onmouseover = function() {
		show_up.style.backgroundImage = "url(static/img/02big.jpg)";
	}
	img[2].onmouseover = function() {
		show_up.style.backgroundImage = "url(static/img/03big.jpg)";
	}
	img[3].onmouseover = function() {
		show_up.style.backgroundImage = "url(static/img/04big.jpg)";
	}
	img[4].onmouseover = function() {
		show_up.style.backgroundImage = "url(static/img/05big.jpg)";
	}
}