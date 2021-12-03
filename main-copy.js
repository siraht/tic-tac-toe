/* let game = (function () { */
const body = document.querySelector('.body');
const playerOneMarkerButton = body.querySelector('.playerOneMarkerButton')
const playerTwoMarkerButton = body.querySelector('.playerTwoMarkerButton')
const nameOneInput = body.querySelector('.nameOneInput')
const nameTwoInput = body.querySelector('.nameTwoInput')
const restartButton = body.querySelector('.restartButton')
const congrats = body.querySelector('.congratulationsMessage')
const gameBoardContainer = body.querySelector('.gameBoardContainer')
const playOrderButton = body.querySelector('.playOrderButton')
const leftContainer = body.querySelector('.leftContainer')

/* let playerOne;
let playerTwo; */
playerChoice = 'X';

// Gameboard Object and Arrays
let gameBoard = (function () {

    let gameBoardArray = ['', '', '', '', '', '', '', '', '']


    // Play order functionality
    let whosTurn;
    let playOrderListener = (item) => {
        if (playOrderButton.textContent == "Who goes first?") {
            playOrderButton.textContent = `${playerOne.name}`;
            whosTurn = playerOne;
        } else if (playOrderButton.textContent == `${playerOne.name}`) {
            playOrderButton.textContent = `${playerTwo.name}`;
            whosTurn = playerTwo;
        } else {
            playOrderButton.textContent = `${playerOne.name}`;
            whosTurn = playerOne;
        }
    }
    playOrderButton.addEventListener('click', playOrderListener);


    // Marker placement function expression
    let addMarkerListener = (item) => {
        item.addEventListener('click', event => {
            if (item.textContent || gameOver == true) {

            } else {
                gameStarted = true;
                if (whosTurn == playerOne) {
                    item.textContent = playerOneMarkerButton.textContent;
                    gameBoardArray[item.id] = playerOneMarkerButton.textContent;
                    checkGameEnd();
                    whosTurn = playerTwo;
                } else {
                    item.textContent = playerTwoMarkerButton.textContent;
                    gameBoardArray[item.id] = playerTwoMarkerButton.textContent;
                    checkGameEnd();
                    whosTurn = playerOne;
                }

            }

        })
    }

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
        if ((gameBoardArray[0] == 'O' && gameBoardArray[3] == 'O' && gameBoardArray[6] == 'O') || (gameBoardArray[1] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[7] == 'O') || (gameBoardArray[2] == 'O' && gameBoardArray[5] == 'O' && gameBoardArray[8] == 'O') || (gameBoardArray[0] == 'O' && gameBoardArray[1] == 'O' && gameBoardArray[2] == 'O') || (gameBoardArray[3] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[5] == 'O') || (gameBoardArray[6] == 'O' && gameBoardArray[7] == 'O' && gameBoardArray[8] == 'O') || (gameBoardArray[0] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[8] == 'O') || (gameBoardArray[2] == 'O' && gameBoardArray[4] == 'O' && gameBoardArray[6] == 'O')) {
            gameOver = true;
            if (playerOne.marker == 'O') {
                congratulationsMessage(`${playerOne.name}`)
            } else if (playerTwo.marker == 'O') {
                congratulationsMessage(`${playerTwo.name}`)
            }
        } else if ((gameBoardArray[0] == 'X' && gameBoardArray[3] == 'X' && gameBoardArray[6] == 'X') || (gameBoardArray[1] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[7] == 'X') || (gameBoardArray[2] == 'X' && gameBoardArray[5] == 'X' && gameBoardArray[8] == 'X') || (gameBoardArray[0] == 'X' && gameBoardArray[1] == 'X' && gameBoardArray[2] == 'X') || (gameBoardArray[3] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[5] == 'X') || (gameBoardArray[6] == 'X' && gameBoardArray[7] == 'X' && gameBoardArray[8] == 'X') || (gameBoardArray[0] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[8] == 'X') || (gameBoardArray[2] == 'X' && gameBoardArray[4] == 'X' && gameBoardArray[6] == 'X')) {
            gameOver = true;
            if (playerOne.marker == 'X') {
                congratulationsMessage(`${playerOne.name}`)
            } else if (playerTwo.marker == 'X') {
                congratulationsMessage(`${playerTwo.name}`)
            }
        }
    }

    let congratulationsMessage = (winner) => {
        newDiv = document.createElement('h2');
        newDiv.id = `Congratulations`
        newDiv.textContent = `${winner} wins!`
        newDiv.classList.add('congratulationsMessage');
        leftContainer.appendChild(newDiv);
    }

    // Restart functionality
    let allBoardSquares = body.querySelectorAll('.boardSquare');
    let resetGame = () => {
        gameBoardArray = ['', '', '', '', '', '', '', '', '']
        allBoardSquares.forEach(element => element.textContent = '');
        nameOneInput.value = 'Player One'
        nameTwoInput.value = 'Player Two'
        gameStarted = false;
        gameOver = false;
        playerOneName = nameOneInput.value;
        playerOneChoice = playerOneMarkerButton.textContent;
        playerOne = players(playerOneName, playerOneChoice);
        playerTwoName = nameTwoInput.value;
        playerTwoChoice = playerTwoMarkerButton.textContent;
        playerTwo = players(playerTwoName, playerTwoChoice);
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
                    playerOneMarkerButton.textContent = 'O'
                } else {
                    event.target.textContent = 'O'
                    playerOneMarkerButton.textContent = 'X'
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

// Refresh Player Name and Marker
let refreshPlayer = () => {
    playerOneName = nameOneInput.value;
    playerOneChoice = playerOneMarkerButton.textContent;
    playerOne = players(playerOneName, playerOneChoice);
    playerTwoName = nameTwoInput.value;
    playerTwoChoice = playerTwoMarkerButton.textContent;
    playerTwo = players(playerTwoName, playerTwoChoice);
}

let initialize = (function () {
    nameOneInput.value = 'Player One'
    nameTwoInput.value = 'Player Two'
    gameStarted = false;
    gameOver = false;
    refreshPlayer()
})();

nameOneInput.addEventListener('input', refreshPlayer);
nameTwoInput.addEventListener('input', refreshPlayer);

/* })(); */
