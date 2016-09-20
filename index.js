var h = require('hyperscript')

function width (el) {
  if(el === window)
    return window.innerWidth
  if(el === document)
    el = document.documentElement
  return el.getBoundingClientRect().width
}

function px(p) { return p+'px' }

module.exports = function () {
  var content = h('div.lightbox__content')
  var lightbox = h('div.lightbox', {style: {
    display: 'none',
  }}, content)


  lightbox.close = function () {
    lightbox.style.display = 'none'
    content.innerHTML = ''
  }

  lightbox.show = function (el) {
    content.innerHTML = ''
    content.appendChild(el)
    lightbox.style.display = 'block'
  }

  return lightbox
}









