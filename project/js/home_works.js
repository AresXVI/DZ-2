const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

// const regGmail1 = /^[a-zA-Z0-9._-]+@(mail|inbox|bk|list|internet|xmail|yandex|gmail|yahoo|hotmail|outlook)\.(ru|com)$/
const regGmail2 = /^[a-zA-Z0-9._-]+@(mail.ru|inbox.ru|bk.ru|list.ru|internet.ru|xmail.ru|yandex.ru|gmail.com|yahoo.com|hotmai.com|outlook.com)$/ 
// Думаю второй вариант будет лучше проверяться т.к. Например: "gmail.ru" быть не может.

gmailButton.onclick = () => {
    if (regGmail2.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Valid email'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Invalid email'
        gmailResult.style.color = 'red'
    }
}


const childBlock = document.querySelector('.child_block')
let positionX = 0
let positionY = 0
const moveToRight = () => {
    if (positionX < 450 && positionY === 0) {
        positionX += 10
        childBlock.style.left = positionX + 'px'
        requestAnimationFrame(moveToRight)
        
    } else if (positionX >= 450 && positionY < 450) {
        positionY += 10
        childBlock.style.top = positionY + 'px'
        requestAnimationFrame(moveToRight)
    } else if (positionX > 0 && positionY >= 450) {
        positionX -= 10
        childBlock.style.left = positionX + 'px'
        requestAnimationFrame(moveToRight)
    } else if  (positionX <= 0 && positionY > 0) {
        positionY -= 10
        childBlock.style.top = positionY + 'px'
        requestAnimationFrame(moveToRight)
    } 
}

moveToRight()