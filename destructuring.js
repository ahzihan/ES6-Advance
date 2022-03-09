const fish = { name: 'King Hilsha', price: 900, color: 'Rupali', home: 'Bhola' };

// const color = fish.color;
// const name = fish.name;
// const price = fish.price;
// const home = fish.home;

const { name, color, price, home } = fish;
const details = `My name is ${ name }. I live in ${ home }. My color is ${ color }. My price is ${ price } Tk per Kg.`;
console.log( details );
const company = {
    name: 'GP',
    ceo: {
        id: 1, name: 'Ajmol', address: 'Dhanmondi'
    },
    web: {
        work: 'Web Development', employee: 25, framework: 'react',
        tech: {
            first: 'HTML', second: 'css', third: 'js'
        }
    }
};
// const work = company.web.work;
const address = company.ceo.address;
const { work, framework } = company.web;
const { first, third } = company.web.tech;
console.log( work, framework, address, third );