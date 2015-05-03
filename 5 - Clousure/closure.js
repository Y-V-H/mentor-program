// function test() {
// 	function makecounter() {
// 			var currentCount = 1;

// 			return function() {
// 				return currentCount++;
// 			};
// 		}

// 		var testInner = makecounter();
// 		console.log(testInner());
// 		console.log(testInner());
// 		console.log(testInner());
// 		console.log(testInner());
// };


	


/*SUM
----------------------------*/
// function sum(a) {
// 	return function(b){
// 		return a + b;
// 	};
// }

// console.log(sum(2)(8));

/*Задачка по цвету div
---------------------------*/

// function color() {
	
// 	var divColor = 444;
// 	return function (){
// 		return divColor++; 
// 	};

// };




// function color() {
// 	var divColor = 444;
// 	return function (){
// 		return divColor++; 
// 	};
// };

// var testInner = color();

// console.log(testInner instanceof Function);
// function test() {
// 	document.getElementById("color").style.background = '#' + testInner();
// };


