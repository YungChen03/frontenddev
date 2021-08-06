var tl = gsap.timeline({ defaults: { duration: .6, ease: Back.easeOut.config(2), opacity: 0 } })
var tl2 = gsap.timeline({ defaults: { duration: 1.5, delay: 1 } })
var tl3 = gsap.timeline({ defaults: { duration: 1.7, } })

tl.from('.card-bg', { delay: .5, scale: 0, transformOrigin: 'center' }, '=.2')
    .from('.card-top', { scaleY: 0, transfromOrigin: 'top' })
    .from('.icon', { scale: .05, transfromOrigin: 'center' }, '-=.7')
    .from('.blip1', { scaleX: 0, })
    .from('.blip2', { scaleX: 0, }, '-=.1')
    .from('.blip3', { scaleX: 0, }, '-=.2')
    .from('.blip4', { scaleX: 0, }, '-=.3')
    .from('.blip5', { delay: .4, scaleX: 0, }, '-=.2')

tl2.to('.whole-card', { x: 8, y: 8, repeat: -1, yoyo: true })

tl3.from('.header_content_text', { opacity: 0, y: 40, stagger: .3 })