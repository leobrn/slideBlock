# SlideBlock.js
A Library for creating slide blocks in Javascript

<a href="https://youtu.be/ZXxg2TFTx10" target="_blank">View Video Preview</a>

<a href="https://leobrn.github.io/slideBlock/" target="_blank">View Demos</a>

* [Installation](#installation)
* [Usage](#usage)
* [Settings &amp; Defaults](#settings-and-defaults)
* [Public Methods](#public-methods)
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

## Public Methods

### `activateBlock`: Opens block

```javascript
slideBlockLeft.activateBlock()

```

### `disableBlock`: Closes block

```javascript
slideBlockLeft.disableBlock()
```
## Compliments

Subscribe to <a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank">Youtube</a> and <a href="https://t.me/ovmst" target="_blank">Telegram</a> channel

<a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank"><img src="https://i.ibb.co/sV96kqK/Subscribe.png"></a>


