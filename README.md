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

* `elementID`:
* `overlay`: 
* `startMove`: 
* `delayStart`: 
* `elementsActivateID`: 
* `elementsDisableID`: 
* `slideBlockOverlayHTML`: 

## Public Methods

### `activateBlock`:

```javascript
slideBlockLeft.activateBlock();

```

### `disableBlock`:

```javascript
slideBlockLeft.disableBlock();
```
