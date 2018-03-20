import './index.css'

require('./demo-1')

const hash = window.location.hash.substring(1)
switch (hash) {
  case 'demo-1':
    require('./demo-1')
    break
  case 'demo-2':
    require('./demo-2')
    break
  case 'demo-3':
    require('./demo-3')
    break
  case 'demo-4':
    require('./demo-4')
    break
  case 'demo-5':
    require('./demo-5')
    break
  case 'demo-6':
    require('./demo-6')
    break
  case 'demo-7':
    require('./demo-7')
    break
  case 'demo-8':
    require('./demo-8')
    break
}
document.getElementById('app').innerHTML = `<h1>Web Animations Demos</h1>`
