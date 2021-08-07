const menu = document.querySelector('.menu')
const hide_menu = document.querySelector('.links')

menu.addEventListener('click', () => {
  hide_menu.classList.toggle('active')
})
