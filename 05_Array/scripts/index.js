const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
    // Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit) // lemon


//Number
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers

console.log(numbers.length) // => to know the size of the array, which is 6
console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) //  -> 0
console.log(numbers[5]) //  -> 100

let lastIndex1 = numbers.length - 1;
console.log(numbers[lastIndex1]) // -> 100

//webTechs
const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
    ] // List of web technologies

console.log(webTechs) // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0]) //  -> HTML
console.log(webTechs[6]) //  -> MongoDB

let lastIndex2 = webTechs.length - 1
console.log(webTechs[lastIndex2]) // -> MongoDB


//kenya
const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
    ] // List of countries

console.log(countries) // -> all countries in array
console.log(countries[0]) //  -> Albania
console.log(countries[10]) //  -> Kenya

let lastIndex3 = countries.length - 1;
console.log(countries[lastIndex3]) //  -> Kenya


//shuger
const shoppingCart = [
        'Milk',
        'Mango',
        'Tomato',
        'Potato',
        'Avocado',
        'Meat',
        'Eggs',
        'Sugar'
    ] // List of food products

console.log(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex4 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex4]) //  -> Sugar


//