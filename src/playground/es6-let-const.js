var nameVar = 'Daniel';
var nameVar = 'Jack';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Nick';
console.log('nameConst', nameConst);

// Block scoping

var fullName = 'Daniel Micaletti';
let firstName;

if(fullName){
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);