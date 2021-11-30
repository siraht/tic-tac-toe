const body = document.querySelector('.body');
const markerButton = document.querySelector('.markerButton')
const nameInput = document.querySelector('.nameInput')
const log = document.getElementById('nameValues');

// Gameboard Object and Arrays

// Player Constructor
const players = (name, marker) => {
    const wins = () => `${name} wins!`;
    const loses = () => `${name} loses!`;
    return { name, marker, wins, loses };
};

const jeff = players('Jeff', 'O');

let player;
let npc;

// Determine Player's marker
markerButton.addEventListener('click', updateMarker);
function updateMarker() {

}

// Determine Player's name
nameInput.addEventListener('input', updateName);
function updateName() {
    playerName = nameInput.value;
    player = players(playerName, playerChoice);
}

// Determine NPC Marker based of Player choice
let getNPCMarker = () => {
    if (getPlayerMarker == 'X') {
        return 'O';
    } else {
        return 'X';
    }
}


npc = players('NPC', getNPCMarker());
