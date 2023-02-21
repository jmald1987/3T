console.log("Your JS is linked up. Be the person you needed when you were little.");

/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
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
    }