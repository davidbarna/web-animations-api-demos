import { injectHTML, iconUrl } from '../utils.js'

injectHTML(`<img class="animated-icon" src="${iconUrl}" width="100" />
<img class="animated-icon" src="${iconUrl}" width="100" />
<img class="animated-icon" src="${iconUrl}" width="100" />`)

const element1 = document.getElementsByClassName('animated-icon')[0]
const element2 = document.getElementsByClassName('animated-icon')[1]
const element3 = document.getElementsByClassName('animated-icon')[2]

const animKeyframes = [
  { transform: 'scale(1)', opacity: 1 }, // offset: 0%
  { transform: 'scale(.7)' }, // offset: 50%
  { transform: 'scale(.8) ', opacity: 0.2 } // offset: 100%
]

const animTiming = {
  duration: 500, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: 'alternate' // 'normal', 'reverse', etc.
}

const rotateKeyframes = [
  { transform: 'rotate(0deg) scale(.3)' },
  { transform: 'rotate(90deg)' },
  { transform: 'rotate(180deg)' }
]
const rotateTiming = {
  duration: 3000,
  iterations: Infinity,
  direction: 'alternate'
}

// composite: 'replace' (default)
element1.animate(animKeyframes, animTiming)
element1.animate(rotateKeyframes, rotateTiming)

// composite: 'add'
element2.animate(animKeyframes, animTiming)
element2.animate(
  rotateKeyframes,
  Object.assign({ composite: 'add' }, rotateTiming)
)

// composite: 'accumulate'
element3.animate(animKeyframes, animTiming)
element3.animate(
  rotateKeyframes,
  Object.assign({ composite: 'accumulate' }, rotateTiming)
)

console.log(element1, element2, element3)
