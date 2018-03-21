import { injectHTML, iconUrl, getById } from '../utils.js'

injectHTML(`
<img class="animated-icon" src="${iconUrl}" />
<div>
  <button id="btn-play" >anim.play()</button>
  <button id="btn-pause" >anim.pause()</button>
  <button id="btn-cancel" >anim.cancel()</button>
  <button id="btn-finish" >anim.finish()</button>
  <button id="btn-reverse" >anim.reverse()</button>
</div>
`)

const element = document.getElementsByClassName('animated-icon')[0]

const animKeyframes = [
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(.7)' },
  { transform: 'scale(.8)', opacity: 0.2 }
]

const animOptions = {
  duration: 2000, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  fill: 'forwards' //'backwards', 'both', 'none', 'auto'
}

const anim = element.animate(animKeyframes, animOptions)

getById('btn-play').addEventListener('click', () => anim.play())
getById('btn-pause').addEventListener('click', () => anim.pause())
getById('btn-cancel').addEventListener('click', () => anim.cancel())
getById('btn-finish').addEventListener('click', () => anim.finish())
getById('btn-reverse').addEventListener('click', () => anim.reverse())
