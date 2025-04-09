'use strict';

/*console.log(document.querySelector('.text').textContent);
console.log(document.querySelector('.text').textContent = '🎉correct Number!');
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random () * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.text').textContent = '🚫their is no number';


    } else if (guess === secretNumber) {
        document.querySelector('.text').textContent = '🎉correct Number!'; 

        document.querySelector('body').style.backgroundColor = 'orange';

        document.querySelector('.number').style.width = '70px';


    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.text').textContent = 'your guess is too high'
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.text').textContent = '😥 you lost the game!';
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.text').textContent = 'your guess is too low';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.text').textContent = '😥 you lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random () * 20) + 1;

    document.querySelector('.text').textContent = 'start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '50px'
});
