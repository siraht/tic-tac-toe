/* let game = (function () { */
const body = document.querySelector('.body');
const playerOneMarkerButton = body.querySelector('.playerOneMarkerButton')
const playerTwoMarkerButton = body.querySelector('.playerTwoMarkerButton')
const nameOneInput = body.querySelector('.nameOneInput')
const nameTwoInput = body.querySelector('.nameTwoInput')
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
                item.textContent = playerOneMarkerButton.textContent;
                gameBoardArray[item.id] = playerOneMarkerButton.textContent;
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
    let setInitialPlayerMarkers = (function () {
        playerOneMarkerButton.textContent = 'X';
        playerOneMarkerButton.classList.add('X')
        playerTwoMarkerButton.textContent = 'O';
    })();

    let updateMarker = (event) => {
        if (gameStarted) {

        } else {
            if (event.target == playerOneMarkerButton) {
                body.querySelectorAll('.markerButton').forEach(element => element.classList.toggle('X'));
                if (event.target.classList.contains('X')) {
                    event.target.textContent = 'X'
                    playerTwoMarkerButton.textContent = 'O'
                } else {
                    event.target.textContent = 'O'
                    playerTwoMarkerButton.textContent = 'X'
                }
            } else if (event.target == playerTwoMarkerButton) {
                body.querySelectorAll('.markerButton').forEach(element => element.classList.toggle('X'));
                if (event.target.classList.contains('X')) {
                    event.target.textContent = 'X'
                    playerTwoMarkerButton.textContent = 'O'
                } else {
                    event.target.textContent = 'O'
                    playerTwoMarkerButton.textContent = 'X'
                }
            }
        }

        refreshPlayer();
    }
    playerOneMarkerButton.addEventListener('click', updateMarker);
    playerTwoMarkerButton.addEventListener('click', updateMarker);

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

let playerOne;
let playerTwo
playerChoice = 'X';
let npc;

// Refresh Player Name and Marker
let refreshPlayer = () => {
    playerOneName = nameOneInput.value;
    playerOneChoice = playerOneMarkerButton.textContent;
    playerOne = players(playerOneName, playerOneChoice);
    playerTwoName = nameTwoInput.value;
    playerTwoChoice = playerTwoMarkerButton.textContent;
    playerTwo = players(playerTwoName, playerTwoChoice);
}

nameOneInput.addEventListener('input', refreshPlayer);
nameTwoInput.addEventListener('input', refreshPlayer);

/* })(); */
