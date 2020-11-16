/*-------------------------------- Constants --------------------------------*/
const playerX = 'X'
const playerO = 'O'


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
// let board, winner
let playGame = true //Game Start
let turn = true //Turn
let winner = null




/*------------------------ Cached Element References ------------------------*/
const squares= document.querySelectorAll('td.square')
const resetButton =document.querySelector('#resetButton')
const handleMove =(evt) => console.log(evt)
const lightToDark= document.querySelectorAll('#lightToDark')
const message = document.querySelector('#message')


/*-------------------------------- Event Handlers --------------------------------*/ 
const handleMoveSquare =(evt)=> {
    const classList =evt.target.classList
const location = classList [1]

if (classList[2] === 'X' || classList [2] === 'O'){
    return
}
if(turn){
    classList.add('X')
    statusUpdate()
    turn = !turn
}  else{
    classList.add('O')
    statusUpdate()
    turn = !turn
}   
}

const handleReset = (evt) => {
    console.log(evt.target.resetButton)
}


/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', handleReset)

for (square of squares){
    square.addEventListener('click', handleMoveSquare)
}

// lightToDark.addEventListener('click', turnItOff)

/*-------------------------------- Functions --------------------------------*/ 

const statusUpdate = () => {
    const squareTL = squares[0].classList[2]
    const squareTC = squares[1].classList[2]
    const squareTR = squares[2].classList[2]
    const squareML = squares[3].classList[2]
    const squareMC = squares[4].classList[2]
    const squareMR = squares[5].classList[2]
    const squareBL = squares[6].classList[2]
    const squareBC = squares[7].classList[2]
    const squareBR = squares[8].classList[2]

//Checking for a winner 
    if(squareTL && squareTL === squareTC && squareTL === squareTR){
        playGame =false
        winner = squareTL
        message.innerHTML= `${squareTL} has won!`
    }
}



