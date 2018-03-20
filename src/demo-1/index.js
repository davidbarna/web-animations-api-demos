import heart from '../icons/heart.svg'

document.getElementById(
  'demo'
).innerHTML = `<img id="demo-1-elem-js" src="${heart}" />`

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

const anim = document
  .getElementById('demo-1-elem-js')
  .animate(animKeyframes, animOptions)
