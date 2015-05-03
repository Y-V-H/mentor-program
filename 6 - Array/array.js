/* Первая задача из новой книги
---------------------------------*/
// var products = ["Chocolate", "Icy Mint", "Cake Batter", "Bubblegum" ];
// var lenProducts= products.length;
// var recent = products[lenProducts - 1];

// console.log(recent);

/*Генератор случайных фраз
--------------------------*/
// function makePhrases () {
// 	var words1 = ["24/6","multi-tier","30 foot","B-to-B","win-win"];
// 	var words2 = ["empowered","value-added","orieted","focused","aligned"];
// 	var words3 = ["process","solution","tipping-point","strategy","vision"];

// 	var rand1 = Math.floor(Math.random() * words1.length);	
// 	var rand2 = Math.floor(Math.random() * words2.length);		
// 	var rand3 = Math.floor(Math.random() * words3.length);

// 	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
// 	console.log(phrase);
// };

// makePhrases();

/*Задача с магнитами
-------------------------------------*/
// var products = ["Chocolate", "Icy Mint", "Cake Batter", "Bubblegum" ];
// var hasBubbleGum = [false, false, false, true];

// for (var i = 0; i < hasBubbleGum.length; i++) {
// 	if (hasBubbleGum[i]) {

// 		console.log(products[i] + " contains bubble gum");
// 	};

// };

/* Первая часть задачи 
-------------------------------------*/
// var scores = [60, 50, 60, 58, 54, 54, 
//                   58, 50, 52, 54, 48, 69, 
//                   34, 55, 51, 52, 44, 51, 
//                   69, 64, 66, 55, 52, 61, 
//                   46, 31, 57, 52, 44, 18, 
//                   41, 53, 55, 61, 51, 44];
// var output;

// for (var i = 0; i < scores.length; i++) {
    
//     output = "Bubble solution #" + i + " score: " + scores[i];
    
//     console.log(output);
// }

/* Выводить max значения пузырей 
------------------------------------*/

var scores = [60, 50, 60, 58, 54, 54, 
                  58, 50, 52, 54, 48, 69, 
                  34, 55, 51, 52, 44, 51, 
                  69, 64, 66, 55, 52, 61, 
                  46, 31, 57, 52, 44, 18, 
                  41, 53, 55, 61, 51, 44];

var highScore = 0,
	output;

for (var i = 0; i < scores.length; i++) {
	output = "Bubble solution #" + i + " score: " + scores[i];
	console.log(output);

	if ( scores[i] > highScore ) {
		highScore = scores[i];
	}
};

var bestSolution = [];
for (var i = 0; i < scores.length; i++) {
	if (scores[i] == highScore) {
		bestSolution.push(i)
	}
};

console.log( "Bubles tests: " + i );
console.log( "Highest bubble score:" + highScore );  
console.log( "Array with max size: " + bestSolution);