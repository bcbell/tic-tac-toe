/*-------------------------------- Constants --------------------------------*/
const board =[];

const playerXO ={
    '1':'magenta',
    '-1': 'eletric blue',
    null: 'white',
}

const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)

/*------------------------ Cached Element References ------------------------*/
const resetBtn= document.getElementById('resetButton')
// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/
// resetBtn.addEventListener('click', function(){//reset Button
//     init()
// })
// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/
init () //initiate 


function findAWinner()// if statement using winning combo

function render(){//render
}

function init(){//initiatization function 

}
//Board Array

// console.log(createBoard)

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is