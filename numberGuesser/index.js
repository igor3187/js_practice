let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max); //Math.floor(Math.random() * 10);
    guessLeft = 3;

//ui elements
const game = document.querySelector('#game');
minNum = document.querySelector('.min-num');
maxNum = document.querySelector('.max-num');
guessBtn = document.querySelector('#guess-btn');
guessInput = document.querySelector('#guess-input');
message = document.querySelector('.message');

//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

//listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

//check if won
    if (guess === winningNum) {
        //game over - won

        gameOver(true, `${winningNum} is correct. YOU WIN!`)

    } else {
        //wrong number
        guessLeft -= 1;
        if (guessLeft === 0) {
            //game over - lost
            gameOver(false, `You lost, the correct number was ${winningNum}`);
        } else {
            //game continues - answer wrong

            //change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessLeft} guesses left`);
        }
    }
});

//game over
function gameOver(won, msg) {
    let color;
    won === true? color = 'green' : color = 'red';
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //set message
    setMessage(msg);
    //play again?
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return (Math.floor(Math.random()*(max-min+1)+min));
}

//set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
