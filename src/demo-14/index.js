import { injectHTML, iconUrl, getById } from '../utils.js'

const icons = new Array(500)
  .fill(
    `<img class="animated-icon" src="${iconUrl}" style="border: 5px solid #ccc;" />`
  )
  .join('')

injectHTML(`
<div>
  <button id="btn-cancel" >Cancel all</button>
  <button id="btn-play-3" >Anim border width</button>
  <button id="btn-play-2" >Anim border color</button>
  <button id="btn-play-1" >Anim scale</button>
</div>
${icons}
`)

const elements = Array.from(document.getElementsByClassName('animated-icon'))

const animOptions = {
  duration: 500, //milliseconds
  easing: 'ease-in-out', // 'linear', a bezier curve, etc. delay: 10, //milliseconds
  iterations: Infinity, // or a number
  direction: 'alternate' // 'normal', 'reverse', etc.
}

const animations = []
const cancelAllAnimations = () => animations.forEach(anim => anim.cancel())

getById('btn-play-1').addEventListener('click', () => {
  const animKeyframes = [
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(.7)' },
    { transform: 'scale(.8)', opacity: 0.2 }
  ]
  cancelAllAnimations()
  const anims = elements.map(element =>
    element.animate(animKeyframes, animOptions)
  )
  animations.push(...anims)
})

getById('btn-play-2').addEventListener('click', () => {
  const animKeyframes = [{ borderColor: '#f00' }, { borderColor: '#0f0' }]
  cancelAllAnimations()
  const anims = elements.map(element =>
    element.animate(animKeyframes, animOptions)
  )
  animations.push(...anims)
})

getById('btn-play-3').addEventListener('click', () => {
  const animKeyframes = [{ borderWidth: '5px' }, { borderWidth: '10px' }]
  cancelAllAnimations()
  const anims = elements.map(element =>
    element.animate(animKeyframes, animOptions)
  )
  animations.push(...anims)
})

getById('btn-cancel').addEventListener('click', cancelAllAnimations)
