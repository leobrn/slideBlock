(function (win, doc) {
    'use strict'
    const SlideBlock = function (options) {
        const settings = {
            elementID: '',
            overlay: false,
            overlayDisables: true,
            startMove: false,
            delayStart: 500,
            elementsActivateID: [],
            elementsDisableID: [],
            slideBlockOverlayHTML: `<div class="slide-block slide-block--overlay" id="slideBlockOverlay""></div>`
        }
        Object.assign(settings, options)
        const element = doc.getElementById(settings.elementID)
        this.element = element
        this.settings = settings
        this.elementListener()
        this.startMove()
    }

    SlideBlock.prototype.disableBlock = function () {
        const settings = this.settings,
            element = this.element
        if (element) {
            element.classList.remove('slide-block--active')
            if (settings.overlay) {
                const slideBlockOverlay = doc.getElementById('slideBlockOverlay')
                slideBlockOverlay.parentNode.removeChild(slideBlockOverlay)
                doc.body.classList.remove('slide-block--overflow')
            }
        }
    }

    SlideBlock.prototype.activateBlock = function () {
        const settings = this.settings,
            element = this.element
        if (element) {
            element.classList.add('slide-block--active')
            if (settings.overlay) {
                element.insertAdjacentHTML("afterEnd", settings.slideBlockOverlayHTML)
                doc.body.classList.add('slide-block--overflow')
                if (settings.overlayDisables) {
                    const slideBlockOverlay = doc.getElementById('slideBlockOverlay')
                    slideBlockOverlay.addEventListener('click', function () {
                        this.disableBlock()
                    }.bind(this))
                }
            }
        }
    }

    SlideBlock.prototype.elementListener = function () {
        const settings = this.settings,
            listener = function (arr, disable = false) {
                if (Array.isArray(arr)) {
                    arr.forEach(function (item) {
                        const elementEvent = doc.getElementById(item)
                        if (elementEvent) {
                            elementEvent.addEventListener('click', function () {
                                if (disable) {
                                    this.disableBlock()
                                } else {
                                    this.activateBlock()
                                }
                            }.bind(this))
                        }
                    }.bind(this))
                }
            }.bind(this)
        listener(settings.elementsActivateID)
        listener(settings.elementsDisableID, true)
    }

    SlideBlock.prototype.startMove = function () {
        const settings = this.settings
        if (settings.startMove) {
            setTimeout(function () {
                this.activateBlock()
            }.bind(this), settings.delayStart)
        }
    }

    win.SlideBlock = SlideBlock
})(window, document)
