var products = [	{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
									{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
									{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
									{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
									{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
									{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
									{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
									{ name: "Water", calories: 0, color: "clear", sold: 62123 }];

function compareSold(colaA, colaB) {
	if (colaA.sold > colaB.sold) {
		return 1;
	} else if (colaA.sold === colaB.soldB) {
		return 0;
	} else {
		return -1;
	}
}



function printProduct(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Name: " + products[i].name + 
			", Calories: " + products[i].calories +
			", Color: " + products[i].color + 
			", Sold: " + products[i].sold);
	}
}

products.sort(compareSold);
printProduct(products);
