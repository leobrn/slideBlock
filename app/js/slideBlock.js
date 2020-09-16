(function (win, doc) {
    'use strict'
    const slideBlock = function (options) {

        const settings = {
            position: 'none',
            elementID: 'none',
            overlay: false,
            startMove: false,
            delayStart: 500,
            elementsActivateID: [],
            elementsDisableID: []
        },
            slideBlockOverlayHTML = `<div class="slide-block slide-block--overlay" id="slideBlockOverlay""></div>`,
            elementAddEventListener = function (array, disable = false) {
                if (array.length > 0) {
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
            }

        Object.assign(settings, options)
        const element = document.getElementById(settings.elementID)
        elementAddEventListener(settings.elementsActivateID)
        elementAddEventListener(settings.elementsDisableID, true)

        const activateBlock = function activate() {
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
        }
        const disableBlock = function () {
            if (element) {
                element.classList.remove('slide-block--active')
                if (settings.overlay) {
                    const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                    slideBlockOverlay.parentNode.removeChild(slideBlockOverlay)
                    doc.body.classList.remove('slide-block--overflow')
                }
            }
        }

        const startMove = function () {
            if (settings.startMove) {
                element.classList.add('slide-block--active')
            }
        }

        element.classList.add(`slide-block--${settings.position}`)
        setTimeout(startMove, settings.delayStart)

    }

    win.slideBlock = slideBlock
})(window, document)
