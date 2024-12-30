let img = document.querySelector('img')
let Bulbbtn = document.querySelector('#btn')

let btn = true

Bulbbtn.addEventListener('click', () => {
  if (btn) {
    img.src = 'images/Bulb-on.jpg'
    Bulbbtn.innerText = 'Bulb-off'
    btn = false
  } else {
    img.src = 'images/Bulb-off.jpg'
    Bulbbtn.innerText = 'Bulb-on'
    btn = true
  }
})
