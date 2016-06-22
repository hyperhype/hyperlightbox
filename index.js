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
  var lightbox = h('div.lightbox', {style: {
    background: 'white', border: '1px solid black',
    position: 'fixed',
    top: px(20), bottom: px(20),
    left: px(20), right: px(20),
    display: 'none',
    padding: px(10)
  }})

  lightbox.close = function () {
    lightbox.style.display = 'none'
    lightbox.innerHTML = ''
  }

  lightbox.center = function () {
    lightbox.style.left = px((width(window) - width(lightbox)) / 2)
  }

  lightbox.show = function (el) {
    lightbox.appendChild(el)
    lightbox.style.display = 'block'
    lightbox.center()
  }

  return lightbox
}

