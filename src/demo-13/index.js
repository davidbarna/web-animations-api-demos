import { injectHTML, iconUrl } from '../utils.js'

const hearts = new Array(20)
hearts.fill(`<img class="animated-icon" src="${iconUrl}" width="25"/>`)

document.getElementById('demo').innerHTML = `
  <p>
    <button id="btn-play-1">effectsGroup1.play()</button>
    <button id="btn-play-2">effectsGroup2.play()</button>
  <p>
  ${hearts.join('')}`

const animKeyframes = [
  { transform: 'translateY(25px)', opacity: 1 },
  { transform: 'translateY(-25px)', opacity: 0.3 }
]

const animOptions = {
  duration: 500, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  direction: 'alternate', // 'normal', 'reverse', etc.
  fill: 'both', //'backwards', 'both', 'none', 'auto'
  iterations: 4
}

const elems = Array.from(document.getElementsByClassName('animated-icon'))
const elemsGroup1 = elems.slice(0, 10)
const elemsGroup2 = elems.slice(10)

const getKeyframesGroup = elems => {
  const keyframeEffects = Array.from(elems).map((elem, i) => {
    const options = Object.assign({}, animOptions, { delay: 150 * i })
    return new KeyframeEffect(elem, animKeyframes, options)
  })
  return new SequenceEffect(keyframeEffects)
}

var effectsGroup1 = getKeyframesGroup(elemsGroup1)
var effectsGroup2 = getKeyframesGroup(elemsGroup2)

document.getElementById('btn-play-1').addEventListener('click', () => {
  document.timeline.play(effectsGroup1)
})

document.getElementById('btn-play-2').addEventListener('click', () => {
  document.timeline.play(effectsGroup2)
})
