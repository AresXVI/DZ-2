
// Задание №1

// while
// var arr = [10, 20, 30, 50, 235, 3000  ]
// var i = -1            
// while ( i < arr.length - 1) {
//     i++;
//     if ( arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2' || arr[i].toString()[0] === '5' )
//     console.log(arr[i]);
// }

// for 
// var arr = [10, 20, 30, 50, 235, 3000  ]
// for ( var i = 0; i < arr.length; i++ ) {
//     if (arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2' || arr[i].toString()[0] === '5') {
//     console.log(arr[i]);
//     }
// }

// for (in)
// var arr = [10, 20, 30, 50, 235, 3000  ]
// for (var num in arr) {
//     if (arr[num].toString()[0] === '1' || arr[num].toString()[0] === '2' || arr[num].toString()[0] === '5'){
//         console.log(arr[num]);
//     }
// }

// for (of)
// var arr = [10, 20, 30, 50, 235, 3000  ]
// for (var num of arr) {
//     var numSt = num.toString()[0]
//     if ( numSt === '1' || numSt === '2' || numSt === '5' ) {
//         console.log(num);
//     }
// }




// Задание №2

// var count = 20
// while ( count >= 1 ) {
//     console.log(count);
//     count -= 1
// }


// Задание №3

// var lightswitch = prompt('Выберите цвет: (Красный, Желтый, Зеленый)').toLowerCase().trim()

// if (lightswitch === 'красный') {
//     alert('CТОЙ !')
// }  else if (lightswitch === 'желтый') {
//     alert('ЖДИ !')
// } else if (lightswitch === 'зеленый') {
//     alert('ИДИ !')
// } else {
//     alert('Выберите один цветов !!! ')
// }

// switch lightswitch {
//     case 'красный':
//         alert('СТОЙ !!!')
//         break
//     case 'желтый':
//         alert('ПОДОЖДИ !)')
//         break
//     case 'зеленый':
//         alert('ИДИ )')
//         break
//     default:
//         alert('Выбери цвет даун!')d'
//         break
//