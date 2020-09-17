(function (win, doc) {
    'use strict'
    const slideBlock = function (options) {

        const settings = {
            elementID: '',
            overlay: false,
            startMove: false,
            delayStart: 500,
            elementsActivateID: [],
            elementsDisableID: [],
            slideBlockOverlayHTML: `<div class="slide-block slide-block--overlay" id="slideBlockOverlay""></div>`
        },
            listener = function (obj, arr, disable = false) {
                if (Array.isArray(arr)) {
                    arr.forEach(item => {
                        const elementEvent = document.getElementById(item)
                        if (elementEvent) {
                            elementEvent.addEventListener('click', () => {
                                if (disable) {
                                    obj.disableBlock()
                                } else {
                                    obj.activateBlock()
                                }
                            })
                        }
                    })
                }
            }

        Object.assign(settings, options)
        listener(this, settings.elementsActivateID)
        listener(this, settings.elementsDisableID, true)

        const element = document.getElementById(settings.elementID)
        this.element = element
        this.settings = settings

        if (settings.startMove) {
            setTimeout(this.activateBlock(), settings.delayStart)
        }
    }

    slideBlock.prototype.activateBlock = function () {
        const element = this.element
        const settings = this.settings
        if (element) {
            element.classList.add('slide-block--active')
            if (settings.overlay) {
                element.insertAdjacentHTML("afterEnd", settings.slideBlockOverlayHTML)
                doc.body.classList.add('slide-block--overflow')
                const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                slideBlockOverlay.addEventListener('click', () => {
                    this.disableBlock()
                })
            }
        }
    }

    slideBlock.prototype.disableBlock = function () {
        const element = this.element
        const settings = this.settings
        if (element) {
            element.classList.remove('slide-block--active')
            if (settings.overlay) {
                const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                slideBlockOverlay.parentNode.removeChild(slideBlockOverlay)
                doc.body.classList.remove('slide-block--overflow')
            }
        }
    }

    win.slideBlock = slideBlock
})(window, document)
