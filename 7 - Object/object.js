/* Штраф
-----------------------------*/
// var fiat = {
// 	make: "Fiat",
// 	model: "500",
// 	year: 1957,
// 	color: "Medium Blue",
// 	passenger: 2,
// 	convertible: false,
// 	mileage: 88000
// };

/*Dog Figo
-----------------------------*/
// var dog = {
// 	name: "Fido",
// 	weight: 20.2,
// 	age: 4,
// 	breed: "mixed",
// 	activity: "fetch balls" 
// };
// var bark;
// if ( dog.weight > 20 ) {
// 	bark = "WOOF WOOF";
// } else {
// 	bark = 'woof woof';
// }

// var speak = dog.name + " say " + bark + " when he wants to " + dog.weight;
// console.log(speak); 
// console.log(dog); 

/* Function in object
-----------------------------*/
var fiat = { 
    make: "Fiat",
    model: "500",
    year: 1957, 
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
       this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model +  " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

var chery = {
	make : "Chery",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passenger: 2,
	convertible: false,
	mileage: 1021,
	started: false,
	fuel: 0,
	start: function() {
       this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " + this.model +  " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

var cadillac = {
	make: "GM",
	year: 1955,
	counterKm: 12892,
	color: "tan",
	model: "GM Cadillac",
	passenger: 5,
	started: false,
	fuel: 0,
	start: function() {
       if( this.fuel > 0 ) {
       		this.started = true;
       } else {
    		alert("The car is on empty, fill up before starting!");
       }
       
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.fuel > 0) {
            alert(this.make + " " + this.model +  " goes zoom zoom!");
            this.fuel = this.fuel - 1;
        } else {
            alert("Uh oh, out of fuel!");
            this.stop();
        }
    },
    addFuel: function(amount) {
    	this.fuel = this.fuel + amount;
    }
};

// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();

// chery.drive();
// chery.start();
// chery.drive();
// chery.stop();

// cadillac.drive();
// cadillac.start();
// cadillac.addFuel(2);
// cadillac.start();
// cadillac.drive();
// cadillac.drive();
// cadillac.drive();
// cadillac.stop();

/* Задачка для this?????
--------------------------------*/
// var eightBall = {
// 	index: 0,
// 	advice: ["yes", "no", "maybe", "not a change"],
// 	shake: function() {
// 		this.index = this.index + 1;
// 		if (this.index >= this.advice.length) {
// 			this.index = 0;
// 		}
// 	},
// 	look: function() {
// 		return this.advice[this.index];
// 	}
// };

// eightBall.shake();
// console.log(eightBall.look());

// eightBall.shake();
// console.log(eightBall.look());

// eightBall.shake();
// console.log(eightBall.look());

// eightBall.shake();
// console.log(eightBall.look());