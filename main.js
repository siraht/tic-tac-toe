/* let game = (function () { */
const body = document.querySelector('.body');
const markerButton = body.querySelector('.markerButton')
const nameInput = body.querySelector('.nameInput')
const restartButton = body.querySelector('.restartButton')
const congrats = body.querySelector('.congratulationsMessage')
const gameBoardContainer = body.querySelector('.gameBoardContainer')


// Gameboard Object and Arrays
let gameBoard = (function () {
    // Marker Listener Function Expression
    let addMarkerListener = (item) => {
        item.addEventListener('click', event => {
            this.textContent = markerButton.textContent;
            if (!this.textContent) {
                this.textContent = markerButton.textContent;
            }
            else {

            }
        })
    }
    let gameBoardArray = ['', '', '', '', '', '', '', '', '']
    // New Board Square Function Expression
    let newBoardSquare = function (index) {
        newDiv = document.createElement('div');
        newDiv.id = `${index}`
        newDiv.classList.add('boardSquare');
        gameBoardContainer.appendChild(newDiv);
        /* newDiv.addEventListener('click', function (index) {
            if (!this.textContent) {
                this.textContent = markerButton.textContent;
            } else {

            }
        }) */

    };
    // Create Board from Squares Function Expression
    let createGameBoard = (function () {
        for (let index = 0; index < gameBoardArray.length; index++) {
            newBoardSquare(index);

        }
        document.querySelectorAll('.boardSquare').forEach(addMarkerListener)
    })();
    // Publically available functions - I think
    return {
        gameBoardArray: gameBoardArray
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
/* })(); */
