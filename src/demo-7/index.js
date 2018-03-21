import { injectHTML, getById } from '../utils.js'
import './index.css'

injectHTML(`<p>CSS<br /><div id="demo-elem-css" ></div></p>
<input id="demo-btn-time" type="range" min="0" max="1000"  step="10"  />`)

const element = getById('demo-elem-css')
console.log(element.getAnimations())
const anims = element.getAnimations()
const anim = anims[0] // Animation declared in css

getById('demo-btn-time').addEventListener('input', evt => {
  console.clear()

  anim.pause()
  anim.currentTime = evt.target.value
  console.log('currentTime:', evt.target.value)
  console.log('anim', anim.animationName)
  console.log('anim.animationName:', anim.animationName)
})
