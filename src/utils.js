export const injectHTML = html => {
  document.getElementById('demo').innerHTML = html
}

export const getById = id => document.getElementById(id)

export { default as iconUrl } from './icons/heart.svg'
