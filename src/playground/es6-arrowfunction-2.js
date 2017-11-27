// arguments object  - no longer bound with arrow functions.

const addOld = function (a,b){
	return a + b; 
};

console.log(addOld(55,1));

const add = (a,b) => {
	return a + b;
};

console.log(add(9,4))


// this keyword - no longer bound

const user = {
	name: 'Daniel',
	cities: ['Phoenix', 'San Francisco', 'Moscow'],
	printPlacesLived(){
		console.log(this.name);
		console.log(this.cities);

		return this.cities.map((city) => this.name + ' has lived in ' + city);

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
	}

};

console.log(user.printPlacesLived());


// Challenge

const multiplier = {
	//numbers - array of numbers
	// multiplyBy - single number
	// multiply = return a new array where the numbers have been multiplied
	numbers: [2,4,6,8,10],
	multiplyBy: 10,
	multiply() {
		return this.numbers.map((number) => this.multiplyBy * number);
	}
};

console.log(multiplier.multiply());














