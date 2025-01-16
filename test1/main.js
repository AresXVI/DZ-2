// Exercise 1

const regExp = /^\d{6}$/
const containsOnlyDigits = (str) => {return regExp.test(str)}
console.log(containsOnlyDigits('123456'));

// Exersice 2

const secPassed = () => setInterval(() => console.log('Прошла секунда'), 1000)
secPassed()

// Exersice 3

const count = () => {
    let i = 0
    const interval =  setInterval(() => {
        i++
        console.log(i);
    }, 1000)
    setTimeout(() => clearInterval(interval), 10000)
}
count()

// Exersice 4

const square = document.querySelectorAll('.square')
square.forEach((pick) => pick.onclick = (event) => {
    if (event.target.classList.contains('blue')) event.target.classList.remove('blue')
    else event.target.classList.add('blue')})

// EXersice 5

const request = new XMLHttpRequest
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.onload = () => {
    const data = JSON.parse(request.response)
    console.log(data);    
}