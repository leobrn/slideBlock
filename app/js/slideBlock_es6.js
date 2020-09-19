class SlideBlock {
    constructor(options) {
        const settings = {
            elementID: '',
            overlay: false,
            startMove: false,
            delayStart: 500,
            elementsActivateID: [],
            elementsDisableID: [],
            slideBlockOverlayHTML: `<div class="slide-block slide-block--overlay" id="slideBlockOverlay""></div>`
        }
        Object.assign(settings, options)
        const element = document.getElementById(settings.elementID)
        this.element = element
        this.settings = settings
        this.elementListener()
        this.startMove()
    }

    disableBlock() {
        const element = this.element
        const settings = this.settings
        if (element) {
            element.classList.remove('slide-block--active')
            if (settings.overlay) {
                const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                slideBlockOverlay.parentNode.removeChild(slideBlockOverlay)
                document.body.classList.remove('slide-block--overflow')
            }
        }
    }

    activateBlock() {
        const element = this.element
        const settings = this.settings
        if (element) {
            element.classList.add('slide-block--active')
            if (settings.overlay) {
                element.insertAdjacentHTML("afterEnd", settings.slideBlockOverlayHTML)
                document.body.classList.add('slide-block--overflow')
                const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                slideBlockOverlay.addEventListener('click', () => {
                    this.disableBlock()
                })
            }
        }
    }

    elementListener() {
        const settings = this.settings
        const listener = (arr, disable = false) => {
            if (Array.isArray(arr)) {
                arr.forEach(item => {
                    const elementEvent = document.getElementById(item)
                    if (elementEvent) {
                        elementEvent.addEventListener('click', () => {
                            if (disable) {
                                this.disableBlock()
                            } else {
                                this.activateBlock()
                            }
                        })
                    }
                })
            }
        }
        listener(settings.elementsActivateID)
        listener(settings.elementsDisableID, true)
    }

    startMove() {
        const settings = this.settings
        if (settings.startMove) {
            setTimeout(() => {
                this.activateBlock()
            }, settings.delayStart)
        }
    }
}






