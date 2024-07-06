let obj = {};
console.log(obj.prop);

let x;
console.log(x);

console.log(null == undefined); // true
console.log(null === undefined); 


//A variable when it is declared but not assigned a value (i.e. defined)

let foo;
console.log('is undefined?' , foo === undefined);


// Accessing the value of a property that doesn't exist
let fool =  {a: 'a'};
console.log('is undefined' ,fool.b ===undefined);
