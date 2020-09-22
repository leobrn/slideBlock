const btnsModal = document.querySelectorAll('[data-modalComplex]'),
    modalItems = []

function setState(item) {

    const index = item.dataset.item - 1,
        obj = modalItems[index],
        state = (item.dataset.state === 'true'),
        newState = !state

    if (state) {
        item.classList.add('button--disable')
    } else {
        item.classList.remove('button--disable')
    }

    item.dataset.state = newState
    obj.settings.execute = newState

    if (newState) {
        obj.createBlock(`
        <div class="slide-block" id="slideBlockOverlay">
            <div class="slide-block slide-block--center" id="slideBlockModalComplex">
                <div class="modal" id="modal">
                    <div class="button" id="buttonClose">
                         <span class="button__text">CLICK ME</span>
                    </div>
                </div>
            </div>
        </div>
            `, 'header')
        obj.elementListener()
    }
}

if (btnsModal) {
    btnsModal.forEach(function (item) {

        item.addEventListener("click", () => {
            setState(item)
        })

        const state = (item.dataset.state === 'true')

        modalItems.push(new SlideBlock({
            elementID: 'slideBlockModalComplex',
            destroy: true,
            delayAll: 100,
            overlay: true,
            overlayDisables: false,
            execute: state,
            elementsActivateID: [`modalComplex_${item.dataset.item}`],
            elementsDisableID: ['buttonClose'],
        }))

    })
}

const slideBlockUp = new SlideBlock({
    elementID: 'slideBlockUp',
    startMove: true,
    elementsDisableID: ['notice']
})

const slideBlockLeft = new SlideBlock({
    elementID: 'slideBlockLeft',
    overlay: true,
    elementsActivateID: ['svgMenu']
})

const slideBlockModal = new SlideBlock({
    elementID: 'slideBlockModal',
    overlay: true,
    elementsActivateID: ['button'],
    elementsDisableID: ['buttonClose']
})
