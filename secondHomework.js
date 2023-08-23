// const key = prompt('Введите свойство')
// const person = {
//     age: 30,
//     isStudent: false,
//     firstName: "John",
//     lastName: "Doe",
// };


// console.log(person[key])



// const person = {
//     age: 30,
//     isStudent: false,
//     firstName: "John",
//     lastName: "Doe",
// };

// for(key in person) {
//     console.log(person[key])
// }



// let a = 0

// let b = a

// ++b;

// console.log('b', b);
// console.log('a', a);



// const makePerson = (age, isStudent, firstName, lastName) => {
//     return {
//         age,
//         isStudent,
//         firstName,
//         lastName,
//         sayHi: function() {
//             console.log(`Привет, меня зовут ${this.firstName}. Мне ${this.age} года`)
//         },
//     }
// }

// makePerson(23, false, 'Михай', 'Палиенко')



// const user = {
//     name: 'Mihai',
//     work: {
//         title: 'Фронтенд',
//         isRemote: true,
//     },
// }

// console.log(user?.work?.title)


const surname = document.querySelector('.input').value
const tel = document.querySelector('.input2').value


const user = {
    surname,
    tel,
}
