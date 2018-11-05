const handleFirstNameChange = (event) => {
    // More explicit version!
    // const userText = event.target.value
    // const firstNamePreview = document.querySelector('.first-name-preview')

    // firstNamePreview.innerText = userText;

    // One-liner version!
    document.querySelector('.first-name-preview').innerText = event.target.value
}

const handleSecondNameChange = (event) => {
    document.querySelector('.second-name-preview').innerText = event.target.value
}

const handleDateChange = (event) => {
    document.querySelector('.date-preview').innerText = event.target.value
}

const handleLocationChange = (event) => {
    document.querySelector('.location-preview').innerText = event.target.value
}

const getCurrentStyle = () => {
    const classList = document.querySelector('.wedding-preview').classList;
    
    // Compact Version!
    // Only works if the preview style is always
    // the second thing in the list, though.
    // So probably not a great idea.

    // const classArray = Array.from(classList)
    // return classArray[1]

    // Explicit Version!
    if (classList.contains('princess')) {
        return 'princess'
    } else if (classList.contains('print')) {
        return 'print'
    } else if (classList.contains('bumblebee')) {
        return 'bumblebee'
    } else {
        console.error('Class list does not contain any known invitation style.')
    }

}

const switchToStyleOne = () => {
    const weddingPreview = document.querySelector('.wedding-preview')
    const currentTabText = document.querySelector('.style-one-tab-text')
    const oldTabText = document.querySelector('.current')

    const currentStyle = getCurrentStyle();

    weddingPreview.classList.replace(currentStyle, 'princess');
    currentTabText.classList.toggle('current')
    oldTabText.classList.toggle('current')
}

const switchToStyleTwo = () => {
    const weddingPreview = document.querySelector('.wedding-preview')
    const currentTabText = document.querySelector('.style-two-tab-text')
    const oldTabText = document.querySelector('.current')
    
    const currentStyle = getCurrentStyle();

    weddingPreview.classList.replace(currentStyle, 'print');
    currentTabText.classList.toggle('current')
    oldTabText.classList.toggle('current')
}

const switchToStyleThree = () => {
    const weddingPreview = document.querySelector('.wedding-preview')
    const currentTabText = document.querySelector('.style-three-tab-text')
    const oldTabText = document.querySelector('.current')
    
    const currentStyle = getCurrentStyle();

    weddingPreview.classList.replace(currentStyle, 'bumblebee');

    currentTabText.classList.toggle('current')
    oldTabText.classList.toggle('current')
}

const init = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.first-name-input').addEventListener('keyup', handleFirstNameChange)
        document.querySelector('.second-name-input').addEventListener('keyup', handleSecondNameChange)
        document.querySelector('.date-input').addEventListener('keyup', handleDateChange)
        document.querySelector('.location-input').addEventListener('keyup', handleLocationChange)

        document.querySelector('.style-one-tab').addEventListener('click', switchToStyleOne)
        document.querySelector('.style-two-tab').addEventListener('click', switchToStyleTwo)
        document.querySelector('.style-three-tab').addEventListener('click', switchToStyleThree)
    })
}

init()