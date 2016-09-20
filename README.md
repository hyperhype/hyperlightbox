# hyperlightbox

a lightbox with hyperscript.

just a box that can appear over the other content.

``` js
var lightbox = require('hyperlightbox')
var lb = lightbox()


//make sure it's in the DOM.
document.body.appendChild(lb)


//pass it an element to show.

lb.show(h('h1', 'hello world'))

//later, close it. this will remove the element shown, also.
lb.close()
```

## css

you'll need to apply css to make in appear over the other content.
there are two ways I've found that work well.

### full screen lightbox

with the full screen approach, we can attach the lightbox to the DOM
anywhere.

``` css
.lightbox {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
```

### inline

to make the lightbox not take up the full screen, but only to go over some local context,
we can put it inside a position: relative div.

``` js
h('div.content',
  h('div.relative', lb), //add light box in with content.
  h('h1', 'blah blah blah...')
)
```

and then apply position relative to the container.

``` css
.relative {
  position: relative;
  height: 0px;
}
```

by also setting height to zero, the lightbox will show over the other content.
(the height sets the size of the container div, which the lightbox itself overflows)

## License

MIT


