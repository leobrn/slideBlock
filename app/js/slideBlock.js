(function (win, doc) {
    'use strict'
    const SlideBlock = function (options) {
        const settings = {
            elementID: '',
            overlay: false,
            overlayDisables: true,
            startMove: false,
            delayStart: 500,
            delayAll: 0,
            destroy: false,
            elementsActivateID: [],
            elementsDisableID: [],
            execute: true
        }
        Object.assign(settings, options)
        const element = doc.getElementById(settings.elementID)
        this.element = element
        this.settings = settings
        this._destroyed = false
        this.elementListener()
        this.startMove()
    }

    SlideBlock.prototype.createBlock = function (textHTML, className) {
        const element = doc.querySelector(className)
        if (element) {
            element.insertAdjacentHTML("afterEnd", textHTML)
            this._destroyed = false
        }
    }

    SlideBlock.prototype.destroy = function () {
        const settings = this.settings,
            element = doc.getElementById(settings.elementID),
            parentElement = element.parentElement

        if (element) {
            if (parentElement.id === 'slideBlockOverlay') {
                parentElement.innerHTML = ''
                parentElement.remove()
            } else {
                element.parentNode.removeChild(element)
            }
        }
        this._destroyed = true
    }

    SlideBlock.prototype.disableBlock = function () {
        const settings = this.settings,
            element = this.element || doc.getElementById(settings.elementID)

        if (element) {
            element.classList.remove('slide-block--active')
            if (settings.overlay) {
                const slideBlockOverlay = doc.getElementById('slideBlockOverlay')
                doc.body.classList.remove('slide-block--overflow')
                if (slideBlockOverlay) {
                    slideBlockOverlay.classList.remove('slide-block--overlay')
                }
            }
            if (settings.destroy && !this._destroyed) {
                setTimeout(function () {
                    this.destroy()
                }.bind(this), settings.delayAll)
            }
        }
    }

    SlideBlock.prototype.activateBlock = function () {
        const settings = this.settings,
            element = this.element || doc.getElementById(settings.elementID),
            resultExecute = (typeof settings.execute === "function" ? settings.execute() : settings.execute)

        if (!resultExecute) { return false }

        if (element) {
            const addClasses = function () {
                element.classList.add('slide-block--active')
                if (settings.overlay) {
                    const slideBlockOverlay = doc.getElementById('slideBlockOverlay')
                    if (slideBlockOverlay) {
                        slideBlockOverlay.classList.add('slide-block--overlay')
                        doc.body.classList.add('slide-block--overflow')
                        if (settings.overlayDisables) {
                            slideBlockOverlay.addEventListener('click', function () {
                                this.disableBlock()
                            }.bind(this))
                        }
                    }
                }
            }.bind(this)
            setTimeout(function () {
                addClasses()
            }.bind(this), settings.delayAll)
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
