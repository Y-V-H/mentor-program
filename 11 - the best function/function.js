var passengers = [ {name: "Jane Doloop", paid: true, ticket: "coach"},
									{name: "Dr. Evel", paid: true, ticket: "firstclass"},
									{name: "Sue Property", paid: false, ticket: "firstclass"},
									{name: "John Funcall", paid: true, ticket: "coach"}];


function processPassengers(passengers, testFuction){
	for (var i = 0; i < passengers.length; i++) {
		if (testFuction(passengers[i])){
			return false;
		}
	}
	return true;
}

function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evel");
}
function checkNotPaid(passenger) {
	return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly) {
	console.log("Не можем лететь, т.е. есть люди из черного списка!");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid) {
	console.log("Не можем лететь, т.е. на борту есть зайцы!");
}

// Выводить в консоль зайцев
function printPassenger(passenger) {
	if(passenger.paid === false) {
		console.log("Заяц:" + passenger.name );
	}
}
processPassengers(passengers, printPassenger); // не совсем понятно как в передаваемую функция заносится аргумент



function createDrinkOrder(passenger) {
	var orderFunction = null; // возможно ли так задавать значение для переменно, где будет хранится ссфлка на функцию. 
	if (passenger.ticket === "firstclass") {
		orderFunction = function() {
			console.log("Хотите грузинского вина, Вы же в первом классе!");
		}
	} else {
		orderFunction = function() {
			console.log('Вам положено только вода или кола - челядь');
		}
	}
	return orderFunction; // это и есть возвращаемая функция из функции?
}

function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger);
			getDrinkOrderFunction();
	// предложить обед
			getDrinkOrderFunction();
			getDrinkOrderFunction();
	// Вкл кино
			getDrinkOrderFunction();
}

// Проверить функцию работы сервиса самолета в новом варианте
function servePassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}
servePassengers(passengers);

// Задача на подумать
// function fun(echo) {
// 	console.log(echo);
// };

// fun("hello");

// function boo(aFunction) {
// 	aFunction("boo");
// }

// boo(fun);

// console.log(fun);

// fun(boo);// почему на выходе boo??

// var moreFun = fun;

// moreFun("hello again");

// function echoMaker() {
// 	return fun;
// }

// var bigFun = echoMaker();

// bigFun("Is there an echo?"); // результат неочевидный