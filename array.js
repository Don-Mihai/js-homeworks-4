// const arr = [
//     {
//         name: 'товар 1',
//         price: '1000',
//     },
//     {
//         name: 'товар 2',
//         price: '2000',
//     },
// ]


// arr[0] = 'товар 1'

// arr.push({
//     name: 'товар 3',
//     price: '3000',
// })

// arr.pop()

// console.log(arr)

// const languages = ["English", "French", "German"];

// languages.splice(1, 1, "Spanish", "Russian"); 

// console.log(languages)


// const colors = ["red", "green", "blue", "yellow"];

// const someColors = colors.slice(1, 3);  // ["green", "blue"]

// console.log(colors, someColors )


// const numbers = [1, 2, 3, 4];

// numbers.forEach((element) => {
//     let result = element * element
//     console.log(result)
// })



// const numbers = [1, 2, 3];

// const doubled = numbers.map((element) => {

//     return `<div>${element}</div>`
// })

// console.log(doubled)




// const arr = [
//     {
//         name: 'товар 1',
//         price: '1000',
//         category: 'книга',
//     },
//     {
//         name: 'товар 2',
//         price: '2000',
//         category: 'книга',
//     },
//     {
//         name: 'товар 3',
//         price: '3000',
//         category: 'машина',
//     },
// ]

// const books = arr.filter((element) => {
//     if(element.category === 'книга') {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(books)




// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((total, element) => {
//     return total + element
// }, 0);



const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
];



const pers = people.find((person) => {

    if(person.name === 'Alice') {
        return true
    } else return false
    

});

console.log(pers)


const persIndex = people.findIndex((person) => {
    if(person.name === 'Alice') {
        return true
    } else return false
});  
console.log(persIndex)

let str = 'Михай'

let arr = str.split('')


console.log(str,arr)
