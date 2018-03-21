import { injectHTML, iconUrl } from '../utils.js'

injectHTML(`
<p>
  Default offsets: <br />
  <img class="animated-icon" src="${iconUrl}" />
</p>
<p>
  Custom offsets: <br />
  <img class="animated-icon" src="${iconUrl}" />
</p>`)

const element = document.getElementsByClassName('animated-icon')[0]
const animKeyframes = [
  { transform: 'scale(1)', opacity: 1 }, // offset: 0%
  { transform: 'scale(.7)' }, // offset: 50%
  { transform: 'scale(.8)', opacity: 0.2 } // offset: 100%
]
const animOptions = {
  duration: 500, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: 'alternate' // 'normal', 'reverse', etc.
}

element.animate(animKeyframes, animOptions)

const element2 = document.getElementsByClassName('animated-icon')[1]
const animKeyframes2 = [
  { transform: 'scale(1)', opacity: 1, offset: 0.5 }, // offset: 50%
  { transform: 'scale(.7)', offset: 0.7 }, // offset: 70%
  { transform: 'scale(.8)', opacity: 0.2 } // offset: 100%
]

element2.animate(animKeyframes2, animOptions)
