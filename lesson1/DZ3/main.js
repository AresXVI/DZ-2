// Задание 1

// var  first = Number (prompt('Введтие первое цифру : '))
// var  second = Number (prompt('Введтие второе цифру :'))
// var bm = (first, second) => {
//     if (Number (first) < Number (second)) {
//         alert(`Цифра ${first}  меньше`)
//     } else if (Number (second) < Number (first)) {
//         alert(`Цифра ${second} меньше`)
//     } else if (first === '' || second === '') {
//         alert('Введите цифра, а не буквы !')
//     } else {
//         alert (`Цифры ${first} = ${second}`)
//     }
// }
// bm(first, second)



//Задание 2
// var enter = prompt('Ввдете то что хотите:')
// var count = (enter) => console.log(`Длина строки: ${enter.length} - символа!`);
// count(enter)



//Задание 3
// var  first = Number (prompt('Введтие первое число :'))
// var  sing = prompt('Введтие знак: (+ (плюс), - (минус), * (умножение), / (деление) )')
// var  second = Number (prompt('Введтие второе число :'))

// var  calc = (first, sing, second) => {
// if (sing === '+') {
//     alert(`Ответ: ${first + second}`);
// } else if (sing === '-') {
//     alert(`Ответ: ${first - second}`);
// } else if (sing === '*') {
//     if (first === 0 || second === 0) {
//         alert('Нельзя умножать на 0 !!!')
//     } else {
//         alert(`Ответ: ${first * second}`);
//     }
// } else if (sing === '/') {
//     if (first === 0 || second === 0) {
//         alert('Нельзя делить на 0 !!!')
//     } else {
//         alert(`Ответ: ${first / second}`);
//     }
// } else {
//     alert('Введите цифры, а не буквы !')
// } 
// }
// calc(first, sing, second)


// var  first = Number (prompt('Введтие первое число :'))
// var  sing = prompt('Введтие знак: (+ (плюс), - (минус), * (умножение), / (деление) )')
// var  second = Number (prompt('Введтие второе число :'))

// var  calc = (first, sing, second) => {
//     switch (sing) {
//         case '+' :
//                 alert(`Ответ: ${first + second}`)
//             break
//         case '-':
//             alert(`Ответ: ${first - second}`)
//             break
//         case '*':
//             if (first === 0 || second === 0) {
//                     alert('Нельзя умножать на 0 !!!')
//                 } else {
//                     alert(`Ответ: ${first * second}`)
//                 }
//             break
//         case '/':
//             if (first === 0 || second === 0) {
//                 alert('Нельзя делить на 0 !!!')
//             } else {
//                 alert(`Ответ: ${first / second}`)
//             }
//             break
//         default :
//             alert('Введите цифры, а не буквы !')
//     }
// }
// calc(first, sing, second)



// var askCountOfPenis = prompt('Сколько у вашей бывшей было членов во рту?')
// var getChlen = (countOfPenis) => {
//     if (Number(countOfPenis)) {
//         alert(`Количество котоков которые были во рту у вашей бывшей: ${askCountOfPenis}`);
//     } else if ((countOfPenis).toLowerCase() === 'незнаю') {
//         alert('Билесин эле - чо ты пиздишь?')
//     } 
//     else {
//         alert('Коп коток жебей, бывшаяндай болбой - цифра жаз длабаеб!'); 
//     }
// }

// getChlen(askCountOfPenis)