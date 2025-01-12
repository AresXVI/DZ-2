const winOpenButtons = document.getElementsByClassName('win_img')
const winModals = document.getElementsByClassName('win_modal')
const winClosesButtons = document.getElementsByClassName('win_modal_close')

const OpenWinModals = () => {
    console.log('hello');
    
    // winModals.style.display = 'block'
}

const ClosesWinModal = () => {
    winModals.style.display = 'none'
}

winOpenButtons.onclick = OpenWinModals
winClosesButtons.onclick = ClosesWinModal