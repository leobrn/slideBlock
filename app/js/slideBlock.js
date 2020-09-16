(function (win, doc) {
    'use strict'
    const slideBlock = function (options) {

        const settings = {
            elementID: '',
            overlay: false,
            startMove: false,
            delayStart: 500,
            elementsActivateID: [],
            elementsDisableID: []
        },
            slideBlockOverlayHTML = `<div class="slide-block slide-block--overlay" id="slideBlockOverlay""></div>`,
            activateBlock = function () {
                if (element) {
                    element.classList.add('slide-block--active')
                    if (settings.overlay) {
                        element.insertAdjacentHTML("afterEnd", slideBlockOverlayHTML)
                        doc.body.classList.add('slide-block--overflow')
                        const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                        slideBlockOverlay.addEventListener('click', () => {
                            disableBlock()
                        })
                    }
                }
            },
            disableBlock = function () {
                if (element) {
                    element.classList.remove('slide-block--active')
                    if (settings.overlay) {
                        const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                        slideBlockOverlay.parentNode.removeChild(slideBlockOverlay)
                        doc.body.classList.remove('slide-block--overflow')
                    }
                }
            },
            elementAddEventListener = function (array, disable = false) {
                if (Array.isArray(array)) {
                    array.forEach(item => {
                        const elementEvent = document.getElementById(item)
                        if (elementEvent) {
                            elementEvent.addEventListener('click', () => {
                                if (disable) {
                                    disableBlock()
                                } else {
                                    activateBlock()
                                }
                            })
                        }
                    })
                }
            },
            startMove = function () {
                element.classList.add('slide-block--active')
            }

        Object.assign(settings, options)
        const element = document.getElementById(settings.elementID)

        elementAddEventListener(settings.elementsActivateID)
        elementAddEventListener(settings.elementsDisableID, true)
        if (settings.startMove) {
            setTimeout(startMove, settings.delayStart)
        }

        this.startMove = startMove
        this.activateBlock = activateBlock
        this.disableBlock = disableBlock
    }

    win.slideBlock = slideBlock
})(window, document)
