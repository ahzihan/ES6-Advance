const friends = [ 'Akbar', 'Alamin', 'Arif', 'Emon', 'Rasel Molla', 'Riaz' ];
const flength = friends.map( friend => friend.length );
// console.log( flength );

const products = [
    { name: 'mobile', price: 12000, color: 'black' },
    { name: 'laptop', price: 32000, color: 'silver' },
    { name: 'watch', price: 2200, color: 'black' },
    { name: 'desktop', price: 35000, color: 'black' },
    { name: 'printer', price: 17000, color: 'black' },
];
const pName = products.map( product => product.name );
console.log( pName );

//console log all product details
products.map( product => console.log( product ) );

//forEach //if need no return then use foreEach //if need return then use map
products.forEach( product => console.log( product ) );