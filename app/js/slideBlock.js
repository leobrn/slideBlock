const slideBlockUpID = 'slideBlockUp',
    slideBlockLeftID = 'slideBlockLeft',
    slideBlockOverlayID = 'slideBlockOverlay',
    slideBlockOverlayHTML = `<div class="slide-block slide-block--overlay" id="slideBlockOverlay" onclick="removeSlideBlockActive('slideBlockLeft')"></div>`

function removeSlideBlockActive(elementID) {
    const slideElement = document.getElementById(elementID)
    if (slideElement) {
        slideElement.classList.remove('slide-block--active')

        if (elementID === slideBlockLeftID) {
            const slideBlockOverlay = document.getElementById(slideBlockOverlayID);
            slideBlockOverlay.parentNode.removeChild(slideBlockOverlay);
            document.body.classList.remove('slide-block--overflow')
        }
    }
}

function addSlideBlockActive(elementID) {
    const slideElement = document.getElementById(elementID)
    if (slideElement) {
        slideElement.classList.add('slide-block--active')

        if (elementID === slideBlockLeftID) {
            slideElement.insertAdjacentHTML("afterEnd", slideBlockOverlayHTML)
            document.body.classList.add('slide-block--overflow')
        }
    }
}

addSlideBlockActive(slideBlockUpID)