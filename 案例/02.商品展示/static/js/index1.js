window.onload=function(){
	var img=document.getElementsByTagName("img");
	var show_up=document.getElementsByClassName("show_up")[0];
	for(var i=0;i<img.length;i++){
		(function(i){
			img[i].onmouseover=function(){
				show_up.style.backgroundImage="url(static/img/0"+(i+1)+"big.jpg)";
			}
		})(i)
	}
}
