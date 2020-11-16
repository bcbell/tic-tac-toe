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
// const handleMove =(evt) => console.log(evt)
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
    turn =!turn
    statusUpdate()
}  else{
    classList.add('O')
    turn =!turn
    statusUpdate()
}   
}

const handleReset = () => {
    turn = true
    message.innerHTML= `Another Round of Tic Tac Toe`
    winner = null
      for(const square of squares){
          square.classList.remove('X')
          square.classList.remove('O')
      }
}


/*----------------------------- Event Listeners -----------------------------*/

for (square of squares){
    square.addEventListener('click', handleMoveSquare)
}

resetButton.addEventListener('click', handleReset)
// lightToDark.addEventListener('click', turnItOff)

/*-------------------------------- Functions --------------------------------*/ 
const theWinnerIs = (letter) => letter === 'X' ? playerX : playerO

const findAWinner = (letter) => {
    playGame = false
    if (letter === 'X'){
        message.innerHTML= `<span>${theWinnerIs(letter)} has won!</span>`    
    } else{
        message.innerHTML= `<span>${theWinnerIs(letter)} has won!</span>`     
    }
}

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
        if (squareTL && squareTL ===squareTC && squareTL ===squareTR){
    } else if(squareML && squareML === squareMC && squareML=== squareMR){ 
         findAWinner(squareML);
    } else if (squareBL && squareBL=== squareBC && squareBL=== squareBR){
         findAWinner(squareBL);
    } else if (squareTL && squareTL === squareML  && squareTL=== squareBL){
         findAWinner(squareTL);
    } else if (squareTC && squareTC === squareMC && squareTC === squareBC){
          findAWinner(squareTC);
    } else  if(squareTR && squareTR === squareMR && squareTR=== squareBR){
         findAWinner(squareTR);
    }else if (squareTL && squareTL === squareMC && squareTL === squareBR){
        findAWinner(squareTL); 
    } else if (squareTR && squareTR === squareMC && squareTR=== squareBL){
        findAWinner(squareTR);
    } else if (squareTL && squareTC && squareTR && squareML && squareMC && squareMR && squareBL && squareBC && squareBR){
        playGame =false
        message.innerHTML= `<span>This game ends in a tie! Try again!</span>`
   
    }
}





 



