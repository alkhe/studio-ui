# Studio UI

A modernist pure CSS framework.

Warning: Studio UI is still in an early draft phase.

Studio UI is an advanced grid-based CSS UI framework, providing both a minimalist yet powerful layout system. It relies heavily on Flexbox, which is supported by all modern browsers.

In the current build, a full color theme can be created by providing only two seed colors.

## Sample

![http://i.imgbox.com/Rx8pfubo.png](http://i.imgbox.com/Rx8pfubo.png)

## Documentation

All elements using Studio classes must have class `s`.

line-height + 2 * padding will be referred to as *item height*

### Core

#### vv
vertical view

#### vh
horizontal view

#### b
button

#### li
list item

### Quick Layout

#### s-[width]
for [100, 200, 300, 400, 500]
width = width

#### s-lh
height = *item height*

#### s-wh
wrap children width

#### s-wv
wrap children height

#### s-al
left align text

#### s-ac
center align text

#### s-ar
right align text

#### s-aj
justify text

#### s-ns
no select

## Todo
- Build system
- Full React integration
- Custom Color Compile
- Maybe: typography/modal/image/dropdown/progress bar/slider/breadcrumb/etc.
- Update Todo

## Sample Themes

Gray/Blue
`#373b41 | #c5c8c6 | #6686c4`

Gray/Green
`#373b41 | #c5c8c6 | #29c596`

Red
`#ac3b39 | #ddb0af`
