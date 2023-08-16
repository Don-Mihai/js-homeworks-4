const operator = prompt('Введите операцию');
const number = prompt('Введите число');
const number2 = prompt('Введите второе число');

let result;

const divide = (firstNumber, secondNumber) => {
    if(!firstNumber) {
        console.log('Вы не ввели первое число')
        return;
    }

    if(secondNumber === 0) {
        console.log('Нельзя делить на ноль')
        return;
    }

    if(!secondNumber) {
        console.log('Вы не ввели второе число')
        return;
    }

    const result = +firstNumber / +secondNumber;

    return result
};

switch (operator) {
    case '+':
        result = number + number2;
        break;

    case '-':
        result = number - number2;
        break;

    case '*':
        result = number * number2;
        break;

    case '/':
        result = divide(number, number2);
        break;

    default:
        console.log('Недопустимая операция');
}

console.log(result);