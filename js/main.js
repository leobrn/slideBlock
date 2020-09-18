
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
