// PHONE BLOCK

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResuls = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResuls.innerHTML = ('OK')
        phoneResuls.style.color = ('green')
    } else {
        phoneResuls.innerHTML = ('Invalid phone number')
        phoneResuls.style.color = 'red'
    }
}

// requestAnimationFrame