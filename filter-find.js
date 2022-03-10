//Filter an array, return value defend on a condition
const numbers = [ 2, 6, 4, 90, 5, 67, 49 ];
const bigNumbers = numbers.filter( number => number > 20 );
console.log( bigNumbers );

const products = [
    { name: 'mobile', price: 12000, color: 'black' },
    { name: 'laptop', price: 32000, color: 'silver' },
    { name: 'watch', price: 2200, color: 'black' },
    { name: 'desktop', price: 35000, color: 'black' },
    { name: 'printer', price: 17000, color: 'black' },
];
const expensive = products.filter( product => product.price > 20000 );
// console.log( expensive );
const black = products.filter( product => product.color == 'black' );
// console.log( black );

//filter return an array with all elements based on condition. if filter don`t metch any element then return empty array []

//find return first elements (not an array), based on condition. if no metch items then return (undefined)
const whiteItem = products.find( product => product.color == 'black' );
console.log( whiteItem );