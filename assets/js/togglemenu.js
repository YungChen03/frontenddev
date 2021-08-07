const menu = document.querySelector('.menu')
const img = document.querySelector('.menu img')
const hide_menu = document.querySelector('.links')

menu.addEventListener('click', () => {
  hide_menu.classList.toggle('active')
  img.classList.toggle('rotate')
})
