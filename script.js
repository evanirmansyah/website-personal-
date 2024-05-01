let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
    if (!gameBoard[index]) {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        if (checkWin()) {
            document.getElementById("message").innerText = `Player ${currentPlayer} wins!`;
            disableBoard();
        } else if (gameBoard.every(cell => cell !== "")) {
            document.getElementById("message").innerText = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winConditions.some(condition => {
        return condition.every(index => gameBoard[index] === currentPlayer);
    });
}

function disableBoard() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
        cells[i].setAttribute("onclick", `makeMove(${i})`);
    }
    document.getElementById("message").innerText = "";
}
