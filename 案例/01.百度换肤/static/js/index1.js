window.onload = function() {
	var img = document.getElementsByTagName("img");
	var body = document.getElementsByTagName("body")[0];
	for(var i = 0; i < img.length; i++) {
		(function(i) {
			img[i].onclick = function(e) {
				var imgurl=e.target.getAttribute("src");
				body.style.backgroundImage="url("+imgurl+")";
			}
		})(i)
	}
}