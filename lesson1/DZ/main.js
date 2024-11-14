var age = Number (prompt('Оцените наш сервис от 1 до 10'))

if ( age > 5 && age < 6 && age < 1 && age > 10 )  {
} else if (age > 10) {
    alert('Оцените от 1 до 10 !')
} else if (age < 1) {
    alert('Оцените от 1 до 10 !')
} else if( age < 6) {
    alert('Мы работаем над улучшением сервиса!')
} else if(age > 5) {
    alert('Спасибо за высокую оценку !')
} else {
    alert('Введите пожалуйста цифры, а не буквы!')
}