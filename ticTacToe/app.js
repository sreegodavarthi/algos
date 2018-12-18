let origBoard;
let huPlayer = "0";
let aiPlayer = "x";

let winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

let cells = document.querySelectorAll(".cell");

startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].style.removeProperty("background-color");
        cells[i].addEventListener("click", turnClick, false);
    }

    function turnClick(square) {
        turn(square.target.id, huPlayer);
    }

    function turn(squareId, player) {
        origBoard[squareId] = player;
        document.getElementById(squareId).innerText = player;
        let gameWon = checkWin(origBoard, player);
        if (gameWon) {
            gameOver(gameWon);
        }
    }

    function checkWin(board, player) {
        let plays = board.reduce(function(a, e, i) {
            if (e == player) {
                return a.concat(i)
            } else {
                return a;
            }
        }, []);
        // console.log(plays);
        let gameWon = null;

        for (let [index, win] of winComb.entries()) {
            if (win.every(function(elem) {
                    return plays.indexOf(elem) > 1;
                })) {
                gameWon = {
                    index: index,
                    player: player
                };
                break;
            }
        }
        return gameWon;
    }

    function gameOver(gameWon) {
        for (let index of winComb[gameWon.index]) {
            document.getElementById(index).style.backgroundColor = gameWon.player == huPlayer ? "blue" : "red";
        }
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener("click", turnClick, false);
        }
    }


}