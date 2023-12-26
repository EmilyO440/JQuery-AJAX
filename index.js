let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (!board[row][col]) {
        board[row][col] = currentPlayer;
        document.getElementById('board').rows[row].cells[col].innerText = currentPlayer;
        
        if (checkWinner()) {
            displayResult(`${currentPlayer} wins!`);
        } else if (boardIsFull()) {
            displayResult('It\'s a draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;
        }
    }
}

function checkWinner() {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true; // Row win
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true; // Column win
        }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true; // Diagonal win (top-left to bottom-right)
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true; // Diagonal win (top-right to bottom-left)
    }
    return false;
}

function boardIsFull() {
    // Check if the board is full
    for (let row of board) {
        if (row.includes('')) {
            return false; // Board is not full
        }
    }
    return true; // Board is full
}

function restartGame() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
  }
    document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('board').rows[i].cells[j].innerText = '';
        }
    }

    document
