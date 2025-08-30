const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const winningScoreSelect = document.querySelector('#playto');
const resetBtn = document.querySelector('#reset');

// let s1 = 0;
// let s2 = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            player.button.disabled = true;
            opponent.display.classList.add('has-text-danger');
            opponent.button.disabled = true;
        } 
        player.display.innerText = player.score;
    }

}


p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetBtn.addEventListener('click', reset);


function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerHTML = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger')
    p1.button.disabled = false;
    p2.button.disabled = false;
}