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
const colorScheme= {
    dark: "",
    change: function(){
        colorScheme.dark=colorScheme.dark ? "" : "dark";
        body.setAttribute("class", colorScheme.dark)
    }
}


/*---------------------------- Variables (state) ----------------------------*/
let turn;
// Variables might include (board/turn/winner)

/*------------------------ Cached Element References ------------------------*/
const resetBtn= document.getElementById('resetButton')
const squares= document.querySelectorAll('div')
for(const square of squares){ //for/of loop 
    square.addEventListener('click', squares)//touch event response to the touches of the surface- handleMove
}
const lightToDark=document.getElementById('lightToDark')
const body= document.getElementById('body')
// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/
// resetBtn= addEventListener('resetButton', function(){
//     init()
// })

lightToDark.addEventListener('click', colorScheme.change)
// table
// // })
// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/
// init () //initiate 


function findAWinner(){// if statement using winning combo
if(Math.abs(board[0]+board[1] + board [2]) ===3 ) return board [0] //if math absolute returns the combination of the following numbers return board the first number 
if(Math.abs(board[3]+ board[4]+ board [5])===3) return board [3]
if(Math.abs(board[6]+ board [7] + board [8])===3) return board [6]
if(Math.abs (board[0]+ board [3] + board[6])===3 ) return board [0]
if(Math.abs(board[1] + board[4]+ board[7])===3) return board [1]
if(Math.abs(board[2]+ board[5] + board[8])===3) return board [2]
if(Math.abs(board[0] + board[4]+ board[8]===3)) return board [0]
if(Math.abs(board[2]+ board[4]+ board[6])===3) return board [2]
if (board.includes(null)) return null
}



function colorSchemePreference(){
    if (
        window.matchMedia("(prefers-color-scheme:dark)").matches && 
        !colorScheme.dark){
            colorScheme.change();
        }
}

function render(){//render
    container.innerHTML=""


}

// function init(){//initiatization function 
//     table = arr(9).fill() //review
// }
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