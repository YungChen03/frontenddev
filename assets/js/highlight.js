const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.nav-list a')

window.addEventListener('scroll', () => {
  let current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id')
      console.log(current)
    }
  })

  navLi.forEach((a) => {
    a.classList.remove('active')
    if (a.classList.contains(current)) {
      a.classList.add('active')
    }
  })
})
