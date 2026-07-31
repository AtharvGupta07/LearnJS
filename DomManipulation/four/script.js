let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);

const form = document.querySelector('form');
let guessRemaining = document.querySelector('.lastResult');
const prevGuess = document.querySelector('.guesses');
const displayResult = document.querySelector('.lowOrHi');

let remainingChance = 10
const guess =[];

form.addEventListener('submit',(e)=>{
    if(remainingChance > 0){
        e.preventDefault();
        let userGuess = parseInt(document.querySelector('.guessField').value);
        console.log(`user guess: ${userGuess}`);
        
        if(userGuess === randomNumber){
            displayResult.textContent = "Conratulation you guessed the number right."
        }else{
            displayResult.textContent = `${userGuess} was not the right guess.`;
            guess.push(userGuess);
            renderGuess();
            remainingChance = 10 - guess.length
            guessRemaining.textContent = remainingChance;
            if(remainingChance === 0){
                displayResult.innerHTML += `<br>Game Over.Refresh the page to play again.`
            }
        }
        }
})

function renderGuess(){
    prevGuess.innerHTML = "";
    for(let i = 0; i < guess.length; i++){
        prevGuess.innerHTML += `${guess[i]} ,`;
    }
}
