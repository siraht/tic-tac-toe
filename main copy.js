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
            if (item.textContent || gameOver == true) {

            } else {
                item.textContent = markerButton.textContent;
                gameBoardArray[item.id] = markerButton.textContent;
                gameStarted = true;
                checkGameEnd();
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

    };
    // Create Board from Squares Function Expression
    let createGameBoard = (function () {
        gameStarted = false;
        for (let index = 0; index < gameBoardArray.length; index++) {
            newBoardSquare(index);
        }
        document.querySelectorAll('.boardSquare').forEach(addMarkerListener)
    })();
    let gameOver;
    let checkGameEnd = () => {
        if ((gameBoardArray[0] == 'O' && gameBoardArray[1] == 'O' && gameBoardArray[2] == 'O') || (gameBoardArray[0] == 'O' && gameBoardArray[3] == 'O' && gameBoardArray[6] == 'O') || (gameBoardArray[0] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[8] == 'O') || (gameBoardArray[6] == 'O' && gameBoardArray[7] == 'O' && gameBoardArray[8] == 'O') || (gameBoardArray[2] == 'O' && gameBoardArray[5] == 'O' && gameBoardArray[8] == 'O') || (gameBoardArray[1] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[7] == 'O') || (gameBoardArray[3] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[5] == 'O')) {
            gameOver = true;
            alert(`O Wins!`);
        } else if ((gameBoardArray[0] == 'X' && gameBoardArray[1] == 'X' && gameBoardArray[2] == 'X') || (gameBoardArray[0] == 'X' && gameBoardArray[3] == 'X' && gameBoardArray[6] == 'X') || (gameBoardArray[0] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[8] == 'X') || (gameBoardArray[6] == 'X' && gameBoardArray[7] == 'X' && gameBoardArray[8] == 'X') || (gameBoardArray[2] == 'X' && gameBoardArray[5] == 'X' && gameBoardArray[8] == 'X') || (gameBoardArray[1] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[7] == 'X') || (gameBoardArray[3] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[5] == 'X')) {
            gameOver = true;
            alert(`X Wins!`);
        }
    }

    // Restart functionality
    let allBoardSquares = body.querySelectorAll('.boardSquare');
    let resetGame = () => {
        gameBoardArray = ['', '', '', '', '', '', '', '', '']
        allBoardSquares.forEach(element => element.textContent = '');
        gameOver = false;
        gameStarted = false;
    }
    restartButton.addEventListener('click', resetGame);

    // Refresh Player Marker
    let updateMarker = () => {
        if (gameStarted) {

        } else {
            markerButton.classList.toggle('X');
            if (markerButton.classList.contains('X')) {
                markerButton.textContent = 'X'
            } else {
                markerButton.textContent = 'O'
            }
        }

        refreshPlayer();
    }
    markerButton.addEventListener('click', updateMarker);

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




// Determine NPC Marker based of Player choice
let getNPCmarker = () => {
    if (playerChoice == 'X') {
        return 'O';
    } else {
        return 'X';
    }
}


npc = players('NPC', getNPCmarker());

/* })(); */
