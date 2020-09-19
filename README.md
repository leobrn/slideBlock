# SlideBlock.js
A Library for creating slide blocks in Javascript

<a href="https://youtu.be/ZXxg2TFTx10" target="_blank">View Video Preview</a>

<a href="https://leobrn.github.io/slideBlock/" target="_blank">View Demos</a>

* [Installation](#installation)
* [Usage](#usage)
* [Settings &amp; Defaults](#settings-and-defaults)
* [Positions](#positions)
* [Public Methods](#public-methods)
* [FAQ's](#faq)
* [Compliments](#compliments)

## Installation

As standalone just include the file in a tags:

```html
<link rel="stylesheet" href="slideBlock.css">

<script src="slideBlock.js"></script>
```

## Usage

```html
<div class="slide-block slide-block--left" id="slideBlockLeft">
 <div class="menu" id="leftMenu">

  </div>
 </div>
```
```javascript
const slideBlockLeft = new SlideBlock({
    elementID: 'slideBlockLeft',
    overlay: true,
    elementsActivateID: ['svgMenu']
})
```

## Settings and Defaults

```javascript
settings = {
    elementID: '',
    overlay: false,
    startMove: false,
    delayStart: 500,
    elementsActivateID: [],
    elementsDisableID: [],
    slideBlockOverlayHTML: `<div class="slide-block slide-block--overlay" id="slideBlockOverlay""></div>`
```

* `elementID`: The element ID which the user will be sliding
* `overlay`: If true, the body class will be added .slide-block--overflow and slideBlockOverlay will be created
* `startMove`: Start driving after loading 
* `delayStart`: Delay start of movement when startMove = true
* `elementsActivateID`: An array of elements that open the block 
* `elementsDisableID`: An array of elements that close the block
* `slideBlockOverlayHTML`: Overlay block HTML

## Positions

The position of the blocks is set using css classes:

* `.slide-block--top`: Block position on top
* `.slide-block--right`: Block position to the right
* `.slide-block--bottom`: Block bottom position 
* `.slide-block--left`: Block position to the left
* `.slide-block--center`: Сenter block position

## Public Methods

### `activateBlock`: Opens block

```javascript
slideBlockLeft.activateBlock()
```
### `disableBlock`: Closes block

```javascript
slideBlockLeft.disableBlock()
```
### `elementListener`: Sets the click event for the passed elements ID in the elementsActivateID / elementsDisableID array 

```javascript
slideBlockLeft.elementListener()
```

### `startMove`: The start of block movement if the startMove = true setting is set. The delay is set by the delayStart setting

```javascript
slideBlockLeft.startMove()
```
## FAQ

### - How can I make a modal window using slideBlock.js?

```html
<div class="slide-block slide-block--center" id="slideBlockModal">
   <div class="modal" id="modal">
      <div class="button" id="modalClose">
       <span class="button__text">Modal close</span>
     </div>
   </div>
</div>
```

```javascript
const slideBlockModal = new SlideBlock({
    elementID: 'slideBlockModal',
    overlay: true,
    elementsActivateID: ['modalOpen'],
    elementsDisableID: ['modalClose']
})
```
### - I have a functional proposal / I found a bug. Where can I write?

Telegram chat <a href="https://t.me/ovmst_chat" target="_blank">@ovmst_chat</a>

## Compliments

Subscribe to <a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank">Youtube</a> and <a href="https://t.me/ovmst" target="_blank">Telegram</a> channel

<a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank"><img src="https://i.ibb.co/sV96kqK/Subscribe.png"></a>
