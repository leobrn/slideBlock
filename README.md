# slideBlock.js
A Library for creating slide blocks in Javascript

<a href="https://youtu.be/ZXxg2TFTx10" target="_blank">View Video Preview</a>

<a href="https://leobrn.github.io/slideBlock/" target="_blank">View Demos</a>

* [Installation](#installation)
* [Usage](#usage)
* [Settings &amp; Defaults](#settings-and-defaults)
* [Public Methods](#public-methods)

## Installation

As standalone just include the file in a script tag:

```html
<script src="slideBlock.js"></script>
```

## Usage

```javascript
const slideBlockLeft = new slideBlock({
    elementID: 'slideBlockLeft'
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
