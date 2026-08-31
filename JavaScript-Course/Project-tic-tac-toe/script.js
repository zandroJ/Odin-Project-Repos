//  Get references to UI elements (buttons, inputs, sounds, etc.)
const startBtn = document.getElementById("startBtn");
const player1Input = document.getElementById("player1Name");
const player2Input = document.getElementById("player2Name");
const playerInputDiv = document.getElementById("playerInput");
const restartBtn = document.getElementById("restartBtn");
const clickSound = document.getElementById("clickSound");
const winSound = document.getElementById("winSound");

//  Gameboard Module – holds the 3x3 board state and provides control functions
const Gameboard = (function () {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setMark = (index, mark) => {
        if (board[index] === "") {
            board[index] = mark;
            return true;
        }
        return false;
    };

    const reset = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setMark, reset };
})();

//  Player Factory – creates a player object with a name and a mark (X or O)
const Player = (name, mark) => {
    return { name, mark };
};

//  GameController Module – manages game logic like turns, checking wins/ties, and switching players
const GameController = (function () {
    let player1;
    let player2;
    let currentPlayer;

    // Start or restart the game with new player names
    const start = (name1, name2) => {
        player1 = Player(name1, "X");
        player2 = Player(name2, "O");
        currentPlayer = player1;
    };

    const getCurrentPlayer = () => currentPlayer;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    // Check all 8 winning combinations
    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return (
                board[a] !== "" &&
                board[a] === board[b] &&
                board[a] === board[c]
            );
        });
    };

    const checkTie = () => {
        return Gameboard.getBoard().every(cell => cell !== "");
    };

    return { start, getCurrentPlayer, switchPlayer, checkWinner, checkTie };
})();

// 🖼️ DisplayController Module – handles UI rendering, events, sounds, and messaging
const DisplayController = (function () {
    const boardElement = document.getElementById("board");
    const messageElement = document.getElementById("message");
    const restartBtn = document.getElementById("restartBtn");
    const startBtn = document.getElementById("startBtn");
    const player1Input = document.getElementById("player1Name");
    const player2Input = document.getElementById("player2Name");
    const playerInputDiv = document.getElementById("playerInput");
    const clickSound = document.getElementById("clickSound");
    const winSound = document.getElementById("winSound");

    // Renders the board based on current state
    const render = () => {
        const board = Gameboard.getBoard();
        boardElement.innerHTML = "";

        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");

            // Add Minecraft-y mark styling if cell has a value
            if (cell !== "") {
                cellElement.classList.add("marked");
                cellElement.classList.add(cell === "X" ? "x-mark" : "o-mark");
                cellElement.textContent = cell;
            }

            // Add click listener for each cell
            cellElement.addEventListener("click", () => handleClick(index));
            boardElement.appendChild(cellElement);
        });
    };

    //  Handles a player clicking a cell
    const handleClick = (index) => {
        const currentPlayer = GameController.getCurrentPlayer();
        const success = Gameboard.setMark(index, currentPlayer.mark);

        if (!success) return;

        clickSound.play(); // play Minecraft-y click

        render();

        // Check win/tie and show result
        if (GameController.checkWinner()) {
            winSound.play(); // victory!
            messageElement.textContent = `${currentPlayer.name} wins!`;
            messageElement.style.color = currentPlayer.mark === "X" ? "#e74c3c" : "#3498db";
            return;
        }

        if (GameController.checkTie()) {
            messageElement.textContent = "It's a tie!";
            messageElement.style.color = "#f1c40f";
            return;
        }

        // Switch turns if no win/tie
        GameController.switchPlayer();
        messageElement.textContent = `${currentPlayer.name}'s turn`;
        messageElement.style.color = currentPlayer.mark === "X" ? "#e74c3c" : "#3498db";
    };

    //  Restart button resets the board and shows input fields
    restartBtn.addEventListener("click", () => {
        Gameboard.reset();
        messageElement.textContent = "";
        render();
        playerInputDiv.style.display = "block";
    });

    //  Start button begins a new game with entered names
    startBtn.addEventListener("click", () => {
        const name1 = player1Input.value || "Steve";
        const name2 = player2Input.value || "Alex";

        Gameboard.reset();
        GameController.start(name1, name2);
        messageElement.textContent = `${name1}'s turn (Swords)`;
        messageElement.style.color = "#e74c3c";
        render();
        playerInputDiv.style.display = "none";
    });

    return { render };
})();

// 🧪 Initial game setup with default players
GameController.start("Steve", "Alex");
DisplayController.render();
messageElement.textContent = "Enter player names to start!";
