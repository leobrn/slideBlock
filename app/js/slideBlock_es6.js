class SlideBlock {
    constructor(options) {
        const settings = {
            elementID: '',
            overlay: false,
            overlayDisables: true,
            startMove: false,
            delayStart: 500,
            elementsActivateID: [],
            elementsDisableID: []
        }
        Object.assign(settings, options)
        const element = document.getElementById(settings.elementID)
        this.element = element
        this.settings = settings
        this.elementListener()
        this.startMove()
    }

    disableBlock() {
        const settings = this.settings,
            element = this.element
        if (element) {
            element.classList.remove('slide-block--active')
            if (settings.overlay) {
                const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                document.body.classList.remove('slide-block--overflow')
                if (slideBlockOverlay) {
                    slideBlockOverlay.classList.remove('slide-block--overlay')
                }
            }
        }
    }

    activateBlock() {
        const settings = this.settings,
            element = this.element
        if (element) {
            element.classList.add('slide-block--active')
            if (settings.overlay) {
                const slideBlockOverlay = document.getElementById('slideBlockOverlay')
                if (slideBlockOverlay) {
                    slideBlockOverlay.classList.add('slide-block--overlay')
                    document.body.classList.add('slide-block--overflow')
                    if (settings.overlayDisables) {
                        slideBlockOverlay.addEventListener('click', function () {
                            this.disableBlock()
                        }.bind(this))
                    }
                }
            }
        }
    }

    elementListener() {
        const settings = this.settings,
            listener = (arr, disable = false) => {
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






