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

//  TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()
let ares
tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const autoTabs = (index = 0) => {
    setInterval(() => {
        index++
        if (index > tabs.length -1) index = 0
        hideTabContent()
        showTabContent(index)
    }, 1000)
}

autoTabs()