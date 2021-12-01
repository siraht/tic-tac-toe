const body = document.querySelector('.body');
const markerButton = body.querySelector('.markerButton')
const nameInput = body.querySelector('.nameInput')
const restartButton = body.querySelector('.restartButton')
const congrats = body.querySelector('.congratulationsMessage')
const gameBoard = body.querySelector('.gameBoardContainer')

// Gameboard Object and Arrays
let gameBoardModule = (function () {
    for (let index = 9; index > 0; index--) {
        newDiv = document.createElement('div');
        newDiv.id = `${index}`
        newDiv.classList.add('boardSquare');
        gameBoard.appendChild(newDiv);
    }
})();


// Player Factory Function
const players = (name, marker) => {
    const wins = () => `${name} wins!`;
    const loses = () => `${name} loses!`;
    return { name, marker, wins, loses };
};

let player;
playerChoice = 'X';
let npc;

// Refresh Player Name and Marker
let refreshPlayer = () => {
    playerName = nameInput.value;
    playerChoice = markerButton.textContent;
    player = players(playerName, playerChoice);
}
nameInput.addEventListener('input', refreshPlayer);

// Refresh Player Marker
let updateMarker = () => {
    markerButton.classList.toggle('X');
    if (markerButton.classList.contains('X')) {
        markerButton.textContent = 'X'
    } else {
        markerButton.textContent = 'O'
    }
    refreshPlayer();
}
markerButton.addEventListener('click', updateMarker);


// Determine NPC Marker based of Player choice
let getNPCmarker = () => {
    if (playerChoice == 'X') {
        return 'O';
    } else {
        return 'X';
    }
}


npc = players('NPC', getNPCmarker());

// Restart button functionality
let resetGame = () => {

}
restartButton.addEventListener('click', resetGame);