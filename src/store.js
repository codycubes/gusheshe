import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ffffff', '#091347', '#e01919', '#353934', '#e88d15'],
  Inner: [ '#ccc30e',  '#00E0FF', '#e01919'],
  Woofer: ['#ccc', '#EFBD4E', '#80C670', '#00E0FF', '#EF674E', '#353934'],
  color: '#ffffff',
  inner: '#FFC400',
  woofer: '#000000',
  decal: 'three2'
  
})

export { state }