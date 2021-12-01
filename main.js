const body = document.querySelector('.body');
const markerButton = document.querySelector('.markerButton')
const nameInput = document.querySelector('.nameInput')
const restartButton = document.querySelector('.restartButton')
const congrats = document.querySelector('.congratulationsMessage')

// Gameboard Object and Arrays

// Player Constructor
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