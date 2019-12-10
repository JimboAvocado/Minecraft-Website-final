var a= document.getElementById("screen");
var b= document.getElementById("furnace");
var c= document.getElementById("furnace2");

var random 
function makeOpaque(){
	a.classList.toggle("opaque");
}

function toggleMusic() {
	document.getElementById("music").play();
}

function pause(){
	document.getElementById("music").pause();
}

function burn(){
	b.classList.toggle("none");
	c.classList.toggle("none");
}

function turnnight() {
	document.getElementById("time").classList.add("day");
	document.getElementById("time").classList.remove("night");

}


function dayNight(){
	var random = (Math.floor(Math.random() * 3));
	//console.log("DayNight");
	//console.log(random);
	if(random == 0){
		document.body.style.background = "url('images/startscreenday.png')";
		//console.log("daytime");
	}
	else if(random == 1){
		document.body.style.background = "url('images/startscreennight.png')";
		//console.log("nighttime");
	}
	else if(random == 2){
		document.body.style.background = "url('images/almostnight.png')";
		//console.log("almostnight");
	}
	/*
	var img = getElementsByClassName("bgImg");
	
	for (let i = 0; i < img.length; i++) {
		console.log(img[i]);
	}
	*/
}
