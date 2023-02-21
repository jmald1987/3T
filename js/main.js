console.log("Your JS is linked up. Be the person you needed when you were little.");

/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;
//win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
function getWinner() {
    // just stub it up for now.
    }

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
    board[idx] = turn;
    // This is tidy
    turn = turn === 'X' ? 'O' : 'X';
    // In an if statement it would look like: 
    // if (turn === 'X') {
    // turn = 'O' 
    // } else {
    // turn = 'X' 
    // };
    // writing the ternary saved you from all that. 
    win = getWinner();
    render();
    };


function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    };
    render();
    //be sure to call the init function!
    init();

function render() {
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
        });
        messages.textContent = `It's ${turn}'s turn!`;
    }
    
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) 
        winner = board[combo[0]];
        });
        if (winner) {
            return winner 
          } else if (board.includes('')) {
            return null // if there's an empty space, return null (no winner yet)
          } else {
            return 'T' // no winner and no empty spaces? That's a tie!
          }
          messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

    };