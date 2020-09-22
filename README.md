# SlideBlock.js
A Library for creating slide blocks in Javascript

<a href="https://youtu.be/ZXxg2TFTx10" target="_blank">View Video Preview</a>

<a href="https://leobrn.github.io/SlideBlock/" target="_blank">View Demos</a>

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
<div class="slide-block" id="slideBlockOverlay">
 <div class="slide-block slide-block--left" id="slideBlockLeft">
  <div class="menu" id="leftMenu">

  </div>
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
    overlayDisables: true,
    startMove: false,
    delayStart: 500,
    delayAll: 0,
    destroy: false,
    elementsActivateID: [],
    elementsDisableID: [],
    execute: function () { return true }
```

* `elementID`: The element ID which the user will be sliding
* `overlay`: If true, the body class will be added .slide-block--overflow and the block with the ID slideBlockOverlay will have a class .slide-block--overlay
* `overlayDisables`: If true, then when you click on overlay, the block will be closed
* `startMove`: Start driving after loading 
* `delayStart`: Delay start of movement when startMove = true
* `delayAll`: Delay for activateBlock and disableBlock methods. Use when creating / destroying a block via createBlock/destroy methods
* `destroy`: If true, when the block is closed, the destroy method will be executed
* `elementsActivateID`: An array of elements that open the block 
* `elementsDisableID`: An array of elements that close the block
* `execute`: The execute value will be checked before the activateBlock method is executed. You can pass to a function that returns true/false or immediately true/false. Use if block opening depends on condition  

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
### `createBlock`: Create block

```javascript
slideBlockLeft.createBlock('<div class="slide-block" id="slideBlockOverlay"><div class="slide-block slide-block--left" id="slideBlockLeft">...</div></div>', '.header')
```
### `destroy`: Destroy block

```javascript
slideBlockLeft.destroy()
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
<div class="slide-block" id="slideBlockOverlay">
 <div class="slide-block slide-block--center" id="slideBlockModal">
   <div class="modal" id="modal">
      <div class="button" id="modalClose">
       <span class="button__text">Modal close</span>
     </div>
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
