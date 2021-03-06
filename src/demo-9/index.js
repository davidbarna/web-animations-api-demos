import { injectHTML, iconUrl } from '../utils.js'

injectHTML(`<img class="animated-icon" src="${iconUrl}" />`)

const element = document.getElementsByClassName('animated-icon')[0]

const animKeyframes = [
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(.7)' },
  { transform: 'scale(.8)', opacity: 0.2 }
]

const animOptions = {
  duration: 500, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: 'alternate', // 'normal', 'reverse', etc.
  fill: 'forwards' //'backwards', 'both', 'none', 'auto'
}

var animationEffect = new KeyframeEffect(
  element, // element to animate
  animKeyframes,
  animOptions
)

document.timeline.play(animationEffect)
