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
    position: 'fixed',
    top: px(0), bottom: px(0),
    left: px(0), right: px(0),
    display: 'none',
//    padding: px(10)
  }}, content)


  lightbox.close = function () {
    lightbox.style.display = 'none'
    lightbox.innerHTML = ''
  }

  lightbox.center = function () {
    lightbox.style.left = px((width(window) - width(lightbox)) / 2)
  }

  lightbox.show = function (el) {
    content.appendChild(el)
    lightbox.style.display = 'block'
    lightbox.center()
  }

  return lightbox
}



