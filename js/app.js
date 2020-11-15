/*-------------------------------- Constants --------------------------------*/
const player ={
    '1' :'blue',
    '-1' : 'orange',
    'null' : 'black'
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
let board, winner,turn



/*------------------------ Cached Element References ------------------------*/
const squares= document.querySelectorAll('td.square')
const resetButton =document.querySelector('#resetButton')
const handleMove =(evt) => console.log(evt)
const lightToDark= document.querySelectorAll('#lightToDark')
const message = document.querySelector('#message')

/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', handleMove)
// lightToDark.addEventListener('click', turnItOff)

/*-------------------------------- Functions --------------------------------*/ 


const handleMoveSquare =(evt) => {//launch an 'x' or 'o' when triggered by the handleMoveSquare in the eventListener
    const whereOnTheBoard = evt.target.whereOnTheBoard
if (board [whereOnTheBoard] || winner)
    return 
    board[whereOnTheBoard] = turn
    turn *= -1
    winner = findAWinner ()
}

console.log(handleMoveSquare)

for(const square of squares){
    square.addEventListener('click', handleMoveSquare)
}

function findAWinner() {
    for (let i = 0; i < winningCombo.length; i++) {
      if (Math.abs(board[winningCombo[i][0]] + board[winningCombo[i][1]] + board[winningCombo[i][2]]) === 3) 
      return board[winningCombo[i][0]];
    }
        if (board.includes(null)) return (null)
            return 'Tie'
}
console.log(findAWinner)

function render() {
    board.forEach(function(squares, whereOnTheBoard){
        squares [square].style.background = player [whereOnTheBoard]
    })  
   if (winner = 'Tie'){
       message.innerHTML =`It's a Tie!`
   } else if (winner){
    message.innerHTML = `${player [winner]} has won! Great Job!`
    }else{
        message.innerHTML = `It's ${player[turn]} turn`
    }
}
