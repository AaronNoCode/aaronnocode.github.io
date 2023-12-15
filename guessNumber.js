// Shothand for console logging
const cl = (...args) => console.log(...args)
cl('fuck')
// Necessary variables declaration, declared as const because the value binded to them is not changing, but the content inside of them.
const input = document.querySelector('.guessField')
const submit = document.querySelector('.submit')
const previousTries = document.getElementById('tryCounter')
const hint = document.getElementById('hint')
const response = document.getElementById('response')
const newGame = document.getElementById('newGameButton')
let randomNumber = Math.floor(Math.random() * 100) + 1
let counter = 0
input.addEventListener('keypress', function (event) { // Function for detecting an Enter when typing in the input
    if (event.key === 'Enter') {
        event.preventDefault()
        checkSubmit() // If Enter is typed, check the input
    }
})

newGame.style.display = 'none' // Sets the display of the new game button to none for it to not show up on booting
submit.addEventListener('click', checkSubmit) // Event listener for submit button

function checkSubmit () { // Function for checking the input
    const userGuess = Number(input.value)
    if (userGuess === '') { // + If entry is empty, focus the input and return
        input.focus()
        return
    }
    if (counter === 0) { // This is only set at the beginning when is the first try
        previousTries.textContent = 'Previous attempts:' // Initial value for the label of previous attempts
    }
    previousTries.textContent += `  ${input.value}` // Once the label is set, it just appends the new entry to the string

    if (userGuess === randomNumber) { // + Hit the random number
        response.textContent = 'Congrats, you won!'
        response.style.backgroundColor = 'green'
        hint.textContent = '' // There's no need for the hint to show since the user won, so the content is set to blank for it to disappear
        newGame.style.display = '' // The display of new game button is set to blank so it shows
        input.disabled = true
        submit.disabled = true
    } else if (counter === 9) { // + Game over
        newGame.style.display = ''
        response.textContent = 'GAME OVER!!!'
        response.style.backgroundColor = 'purple'
        input.disabled = true // Disable the input and the submit button since the user has tried 10 times already (the maximum)
        submit.disabled = true
        hint.textContent = '' // There's no need for the hint to show neither, so the content is set to blank for it to disappear
    } else {
        if (userGuess < randomNumber) { // +Input was lower than random number
            hint.textContent = 'Too low'
        } else { // + Input was higher than random number
            hint.textContent = 'Too high'
        }
        response.textContent = 'You mistaken'
        response.style.backgroundColor = 'red'
    }
    counter++ // In any scenario unless the player clicks on newGame, the counter increases
    input.value = '' // The input return to blank so the user can input a different number without having to delete the previous entry
    input.focus() // Focus on the input field so there's no need to click on it again
}

newGame.addEventListener('click', () => { // Function for behaviour on newGame button clicked
    previousTries.textContent = '' // Almost every text box is set to blank to clean the UI
    response.textContent = ''
    newGame.style.display = 'none' // The button disappear
    submit.disabled = false // Enable the input and the submit button
    input.disabled = false
    counter = 0 // Reset the attempts counter
    randomNumber = Math.floor(Math.random() * 100) + 1 // Set a new random number to guess afterwards
    input.focus() // Focus on input after clicking the new game button
})
