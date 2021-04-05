const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
})
.typeString('Exya')
.pauseFor(300)
.deleteChars(8)
.typeString('<span style="color: #3071FF">Exya</span>')
.pauseFor(300)
.deleteChars(9)
.typeString('<span style="color: #00BFBA">Exya</span>')
.pauseFor(300)
.deleteChars(9)
.typeString('<span style="color: #FF6DFF">Exya</span>')
.pauseFor(300)
.deleteChars(8)
.typeString('Exya')
.start()


const titreAnim = document.querySelector('h2');
const logoAnim = document.querySelector('.logo');
const tel = document.querySelector('.num-tel');
const imgBanner = document.querySelector('.baniere');
const sousTitre = document.querySelector('h3');
const para = document.querySelector('.paragraphe');
const bouTon = document.querySelector('.btn');

const TL1 = new TimelineMax({paused: true});

TL1 
.from(titreAnim, 1, {y: -50, opacity: 0})
.from(logoAnim, 1, {x: -100, opacity: 0}, '-=0.1')
.from(tel, 1, {x: 20, opacity: 0}, '-=0.1')
.from(imgBanner, 1, {x: 100, opacity: 0}, '-=0.5')
.from(sousTitre, 1, {opacity: 0}, '-=0.5')
.from(para, 1, {opacity: 0}, '-=0.5')
.from(bouTon, 1, {x: -100, opacity: 0}, '-=0.5')

TL1.play();


