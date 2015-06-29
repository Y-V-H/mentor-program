
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

// alert(model.shipLength);
var model = {
    boardSize: 7,		// размер поля
    numShips: 3,		// общее кол-о кораблей
    shipsSunk: 0,		// кол-о потопленных кораблей
    shipLength: [ 1, 2, 3 ],	// длинна кораблей
    // shipLength: 1,	// длинна кораблей
    ships: [ { locations: ["0"], hits: [""] }, // позиции и попадания
             { locations: ["0", "0"], hits: ["", ""] },
             { locations: ["0", "0", "0"], hits: ["", "", ""] } ],
    fire: function(guess) {	// метод в качестве аргумента получает координаты выстрела
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);	//получение index клетки в массиве locations
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
    isSunk: function(ship) {	// проверяет потоплен ли корабль
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
	// var alphabet = ["A", "B", "C", "D", "E", "F", "G"].toLowerCase();
	var alphabet = ["a", "b", "c", "d", "e", "f", "g"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var	firstChar = guess.charAt(0),
			row = alphabet.indexOf(firstChar),
			column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {	// странная запись поиска "от-до"
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
		guessLowerCase = guessInput.value,
		guess = guessLowerCase.toLowerCase();

	controller.processGuess(guess);
	guessInput.value = "";	

}

window.onload = init;