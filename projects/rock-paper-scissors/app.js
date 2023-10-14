const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const gameElements = [rock, paper, scissors];

const gameItems = document.querySelectorAll('.gameItem');
gameItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log("Player: " + item.alt);
        console.log("Computer: " + computerPlay());
    });
});

function computerPlay() {
    const i = Math.round(Math.random() * 2);
    return gameElements[i];
}
