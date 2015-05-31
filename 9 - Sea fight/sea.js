
// var view = {
// 	displayMessage: function(msg) {
// 		var messageArea = document.getElementById("messageArea");
// 		messageArea.innerHTML = msg;
// 	},

// 	displayHit: function(location) {
// 		var cell = document.getElementById(location);
// 		console.log(cell);
// 		cell.setAttribute("class", "hit");
// 	},

// 	displayMiss: function(location) {
// 		var cell = document.getElementById(location);
// 		console.log(cell);
// 		cell.setAttribute("class", "miss");
// 	}
// }; 



// view.displayMiss('00');
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

// view.displayMessage("Tap tap, is this thing on?");

var model = {
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
             { locations: ["24", "34", "44"], hits: ["", "", ""] },
             { locations: ["10", "11", "12"], hits: ["", "", ""] } ],
     fire: function(guess) {
         for (var i = 0; i < this.numShips; i++) {
             var ship = this.ships[i];
             var locations = ship.locations;
             var index = locations.indexOf(guess);
             if (index >= 0) {
                 ship.hits[index] = "hit";
					if (this.isSunk(ship)) {
                		this.shipsSunk++;
            		}
                 return true;
             }
         }
         return false;
    },
    isSunk: function(ship) { ... }
};