import './index.css'
import load from 'load-script'

const POLYFILL_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.3.1/web-animations-next.min.js'

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
    load(POLYFILL_URL, (err, script) => require('./demo-8'))
    break
  case 'demo-9':
    load(POLYFILL_URL, (err, script) => require('./demo-9'))
    break
  case 'demo-10':
    require('./demo-10')
    break
  case 'demo-11':
    require('./demo-11')
    break
  case 'demo-12':
    require('./demo-12')
    break
  case 'demo-13':
    load(POLYFILL_URL, (err, script) => require('./demo-13'))
    break
  default:
    require('./demo-1')
}
