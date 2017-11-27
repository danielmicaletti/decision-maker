
const square = function(x){
	return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
// 	return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(3));

const fullName = 'Daniel Micaletti';
console.log('fullName', fullName);

const firstName = (name) => {
	return name.split(' ')[0]
};
console.log('firstName', firstName(fullName));

const lastName = (name) => name.split(' ')[1];
console.log('lastName', lastName(fullName));