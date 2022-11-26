// initialization element

let wonNumber = 0;
let lossNumber = 0;
let totalAttemps = 5;
let attemps = 0;



let cardBody = document.querySelector('.card_body');
let form = document.querySelector('form');
let gessNumber = form.querySelector('#gessNumber');
let resultBtn = form.querySelector('.resultBtn');
let resultText = cardBody.querySelector('#resultText');
let remainingNumber = cardBody.querySelector('#remainingNumber');
let lossWonMessage = cardBody.querySelector('#lossWonMessage');
let affterClose = document.querySelector('#affterClose');
let playAgain = document.querySelector('#playAgain');

form.addEventListener("submit" , function(event){
    event.preventDefault();
    attemps++

    if(attemps === 5){
        gessNumber.disabled = true;
        resultBtn.disabled = true;
        resultBtn.style.cursor = "auto";
        
        setTimeout(() => {
            cardBody.style.transform = "scaley(0)";
        }, 1000);
        setTimeout(() => {
            affterClose.style.transform = "scalex(1)";
        }, 2000);
        setTimeout(() => {
            playAgain.style.transform = "scalex(1)";
        }, 3000);
        
    }

    if(attemps < 6){
        checkValue(gessNumber.value);
    }
    gessNumber.value = '';
    remainingNumber.innerHTML = `Remaining Attemps :  ${totalAttemps-attemps}`
    
    
})

function checkValue(gessNumber){
    var randomNumber = getRandomNumber(5);
    if(gessNumber == randomNumber){
    resultText.innerHTML = `you won the game`;
    wonNumber++;
    }
    else{
        resultText.innerHTML = `you have lost, random number was ${randomNumber}`
        lossNumber++;
    }
    lossWonMessage.innerHTML = `Win : ${wonNumber} & Loss : ${lossNumber}`
    affterClose.innerHTML = `Win : ${wonNumber} & Loss : ${lossNumber}`
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}