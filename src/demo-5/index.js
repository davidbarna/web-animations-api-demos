import { injectHTML, iconUrl, getById } from '../utils.js'

injectHTML(`<img class="animated-icon" src="${iconUrl}" />
<input id="demo-btn-time" type="range" min="0" max="5000"  step="1" value="0" />`)

const element = document.getElementsByClassName('animated-icon')[0]

const animKeyframes = [
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(.7)' },
  { transform: 'scale(.8)', opacity: 0.2 }
]

const animOptions = {
  duration: 1000, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: 3, // or a number
  direction: 'alternate', // 'normal', 'reverse', etc.
  fill: 'forwards' //'backwards', 'both', 'none', 'auto'
}

const anim = element.animate(animKeyframes, animOptions)

getById('demo-btn-time').addEventListener('input', evt => {
  anim.pause()
  anim.currentTime = evt.target.value
  console.clear()
  console.log('currentTime:', evt.target.value)
})
