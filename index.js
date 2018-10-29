const handleFirstNameChange = (event) => {
    const userText = event.target.value
    const firstNamePreview = document.querySelector('.first-name-preview')

    firstNamePreview.innerText = userText;
}

const handleSecondNameChange = (event) => {
    document.querySelector('.second-name-preview').innerText = event.target.value
}

const handleFirstSurnameChange = (event) => {
    document.querySelector('.first-surname-preview').innerText = event.target.value
}


const handleSecondSurnameChange = (event) => {
    document.querySelector('.second-surname-preview').innerText = event.target.value
}

const handleDateChange = (event) => {
    document.querySelector('.date-preview').innerText = event.target.value
}

const handleLocationChange = (event) => {
    document.querySelector('.location-preview').innerText = event.target.value
}

function init() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.first-name-input').addEventListener('keyup', handleFirstNameChange)
        document.querySelector('.second-name-input').addEventListener('keyup', handleSecondNameChange)
        document.querySelector('.first-surname-input').addEventListener('keyup', handleFirstSurnameChange)
        document.querySelector('.second-surname-input').addEventListener('keyup', handleSecondSurnameChange)
        document.querySelector('.date-input').addEventListener('keyup', handleDateChange)
        document.querySelector('.location-input').addEventListener('keyup', handleLocationChange)
    })
}

init()