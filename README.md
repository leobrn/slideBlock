# slideBlock.js
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
const slideBlockLeft = new slideBlock({
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

<a href="https://www.youtube.com/channel/UCkgcvGx_z49fiHJ_aiHAp3g?view_as=subscriber" target="_blank"><img src="https://downloader.disk.yandex.ru/preview/712ec5d668df6ec8ef71082a1735847b66a932af4144dd8d4c5efb47f34394f7/5f632a2c/zQRr9JyOLVRHCgRUTO2yNC1o5LltJr0rM90xKVwOjfk7bW1QompEsqb7ue7XJiMrVpI1Pgf3lTI0fh96M1qg9w==?uid=0&filename=subscribe.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&owner_uid=223483671&size=400x400"></a>

