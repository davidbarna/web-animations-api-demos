import { injectHTML, iconUrl, getById } from '../utils.js'

injectHTML(`<img class="animated-icon" src="${iconUrl}" />
<input id="demo-btn-playback" type="range" min="0.5" max="10"  step="0.5" value="1"  />`)

const element = document.getElementsByClassName('animated-icon')[0]

const animKeyframes = [
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(.7)' },
  { transform: 'scale(.8)', opacity: 0.2 }
]

const animOptions = {
  duration: 1000, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: 'alternate', // 'normal', 'reverse', etc.
  fill: 'forwards' //'backwards', 'both', 'none', 'auto'
}

const anim = element.animate(animKeyframes, animOptions)

getById('demo-btn-playback').addEventListener('change', evt => {
  anim.playbackRate = evt.target.value
  console.log('playbackRate:', evt.target.value)
})
