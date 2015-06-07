
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		console.log(cell);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		console.log(cell);
		cell.setAttribute("class", "miss");
	}
}; 





// view.displayMiss('00');
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

// view.displayMessage("Tap tap, is this thing on?");

// var model = {
//     boardSize: 7,
//     numShips: 3,
//     shipsSunk: 0,
//     shipLength: 3,
//     ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
//              { locations: ["24", "34", "44"], hits: ["", "", ""] },
//              { locations: ["10", "11", "12"], hits: ["", "", ""] } ],
//      fire: function(guess) {
//          for (var i = 0; i < this.numShips; i++) {
//              var ship = this.ships[i];
//              var locations = ship.locations;
//              var index = locations.indexOf(guess);
//              if (index >= 0) {
//                  ship.hits[index] = "hit";
// 					if (this.isSunk(ship)) {
//                 		this.shipsSunk++;
//             		}
//                  return true;
//              }
//          }
//          return false;
//     },
//     isSunk: function(ship) { ... }
// };

var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [ { locations: ["0", "0", "0"], hits: ["", "", ""] },
             { locations: ["0", "0", "0"], hits: ["", "", ""] },
             { locations: ["0", "0", "0"], hits: ["", "", ""] } ],
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++)  {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    },

    // Генерация кораблей

	generateShipLocations: function() {
		var locations;
	    for (var i = 0; i < this.numShips; i++) {
	    	do {
	        	locations = this.generateShip();
	        } while (this.collision(locations));
	        this.ships[i].locations = locations;
	    }
	},

	generateShip: function() {
	    var direction = Math.floor(Math.random() * 2);
	    var row, col;
	    if (direction === 1) { 
	        row = Math.floor(Math.random() * this.boardSize);
	        col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
	    } else { 
	        row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
	        col = Math.floor(Math.random() * this.boardSize);
	    }
	    var newShipLocations = [];
	    for (var i = 0; i < this.shipLength; i++) {
	        if (direction === 1) {
	        	newShipLocations.push(row + "" + (col + i));
	        } else {
	        	 newShipLocations.push((row + i) + "" + col);
	        }
	    }
	    return newShipLocations;
	},

	collision: function(locations) {
	    for (var i = 0; i < this.numShips; i++) {
	        var ship = model.ships[i];
	        for (var j = 0; j < locations.length; j++) {
	            if (ship.locations.indexOf(locations[j]) >= 0) {
	                return true;
	            }
	        }
	    }
	    return false;
	}
};

// model.fire("53");
// model.fire("06");
// model.fire("16");
// model.fire("26");
// model.fire("34");
// model.fire("24");
// model.fire("44");
// model.fire("12");
// model.fire("11");
// model.fire("10");

// Наше все
var controller = {
	guesses: 0,
	processGuess: function(guess){
		var location = parseGuess(guess)
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("Вы затопили все мои лодки " + this.guesses + " guesses");
			}
		}
	}
};

// Фунция парсер для полyчения чисел
function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var	firstChar = guess.charAt(0),
			row = alphabet.indexOf(firstChar),
			column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
	 		alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
		return null;
	}
}

// Получение данных от игрока.
function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	// Обработчик enter-клавиши
	var guessInput = document.getElementById('guessInput');
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}

function handleKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
    	fireButton.click();
    	return false;
   }
} 

function handleFireButton() {
	var guessInput = document.getElementById('guessInput'),
		guess = guessInput.value;

	controller.processGuess(guess);
	guessInput.value = "";	

}

window.onload = init;




