// window.onload = init;

// function init() {
// 	var images = document.getElementsByTagName("img");
// 		for (var i = 0; i < images.length; i++) {
// 		// images[i].onclick = showAnswer;
// 		images[i].onmouseover = showAnswer;
//     }
// }

// function showAnswer(eventObj) {
// 	var image = eventObj.target;

// 	var name = image.id;
// 	name = name + ".jpg";
// 	image.src = name;

// 	setTimeout(reblur, 2000, image);
// }

// function reblur(image) {
// 	var name = image.id;
// 	name = name + "blur.jpg";
// 	image.src = name;
// }

var addOne = function(x) {
	return x + 1;
};
console.log("first " + addOne);
var six = addOne(5);
console.log("second " + six);
