/* 1 - Function min
----------------------*/
// var min = function (f1, f2){

// 	// return (Math.min(f1,f2));
// 	if (f1 >= f2 )
// 		return f2;
// 	else
// 		return f1;

// };

// console.log(min(10, 0));

/* 2 - Function counting B
----------------------*/
// var countBs = function (name){
// 	var count = 0;
// 	var nameLength = name.length;
// 	for (var i = 0; i < nameLength; i++) {
// 		if (name.charAt(i) === "B")
// 			count++;
// 	};
// 	console.log(count);
// };

// countBs('Bar-B in Briston BB');

/* 2.1 - Function counting character
----------------------*/

 

// var countChar = function (){
// 	var expression = (prompt('Введите выражение на английском языке?', "")), 
// 	 	character = (prompt('Что искать?', "")),
// 		count = 0,
// 		expressionLength = expression.length;

// 	for (var i = 0; i < expressionLength; i++) {
// 		if (expression.charAt(i) === character)
// 			count++;
// 	};

// 	console.log(count);
// };
// countChar();

var isEven = function(N) {
	debugger
	if (N === 0){
		return true;
	} else if (N === 1){
		return false;
	} else {
		return isEven(N-2);
	}
};

console.log(isEven(5));

/* Подсчет 
-------------------------*/
// var countSize = function (N) {
// 	if (N === 1){
// 		return N;
// 	} else if (N < 0){
// 		return N;
// 	} else if (res = N + countSize (N - 1)){
// 		return res;
// 	}

// };
// console.log(countSize(-1));