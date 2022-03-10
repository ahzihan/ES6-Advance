const numbers = [ 4, 6, 8, 10 ];
const output = [];

//Old System
// function doubleIt( number ) {
//     return number * 2;
// }

const double = number => number * 2;

for ( const number of numbers ) {
    const result = double( number );
    output.push( result );
}
console.log( output );

//1.loop through each element
//2. for each element call the provided function
//3.result for each element will be stored in an array
const output2 = numbers.map( double );
console.log( output2 );

const square = numbers.map( x => x * x );
console.log( square );