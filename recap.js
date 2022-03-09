//1.let and Const

const hubby = 'Omor Sani';
let phone = 'Xiaomi';
phone = 'Apple15';

//2.Template String
const myNotes = `My name is ${ hubby }. I have a ${ phone } phone.`;
console.log( myNotes );

//3.Default parameter //5.sprade operator
function maxNumber( array = [] ) {
    const max = Math.max( ...array );
    return max;
}
const biggest = maxNumber();
console.log( biggest );

//4.arrow function
const squre = num => num * num;
const sqr = squre( 5 );
console.log( sqr );