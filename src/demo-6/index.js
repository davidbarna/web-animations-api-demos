import { injectHTML, iconUrl, getById } from '../utils.js'

document.getElementById('demo').innerHTML = `
<img class="animated-icon" src="${iconUrl}" />
<div>
  <button id="btn-play" class="ui mini primary button">anim.play()</button>
  <button id="btn-pause" class="ui mini primary button">anim.pause()</button>
  <button id="btn-cancel" class="ui mini primary button">anim.cancel()</button>
  <button id="btn-finish" class="ui mini primary button">anim.finish()</button>
</div>
`

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

anim.onfinish = event => console.log('Animation finished', event)
anim.oncancel = event => console.log('Animation cancel', event)

getById('btn-play').addEventListener('click', () => anim.play())
getById('btn-pause').addEventListener('click', () => anim.pause())
getById('btn-cancel').addEventListener('click', () => anim.cancel())
getById('btn-finish').addEventListener('click', () => anim.finish())
