// var somTo = function(n) {
// 	debugger
// 	if (n !== 1) {
// 		return n + somTo( n - 1 );
// 	}	else {
// 			return n;
// 		}
// };

// console.log(somTo(3));

// var somTo = function(n) {
// 	// debugger
// 	var somToInner = 0;

// 	for (var i = 0; i <= n; i++) {
// 		somToInner += i;
// 	}

// 	return somToInner;
// };

// console.log(somTo(7));

// var somTo = function(n) {
// 	return n * ( n + 1) / 2; 
// };

// console.log(somTo(100));





//Фибоначчи (решение подсмотрел)
function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(fib(3));