/*-------------------------------- Constants --------------------------------*/

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
let board = true
let winner = true
let playerX = true


/*------------------------ Cached Element References ------------------------*/
const squares= document.querySelectorAll('td.square')
const resetButton =document.querySelector('#resetButton')
const handleMove =(evt) => console.log(evt)
const lightToDark= document.querySelectorAll('#lightToDark')

/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', handleMove)
// lightToDark.addEventListener('click', turnItOff)

/*-------------------------------- Functions --------------------------------*/ 

const handleMoveSquare =(evt) => {
    const classList = evt.target.classList
    const whereOnTheBoard = classList[1]
if (classList[2] === 'X' || classList[2] === 'O'){
    return
}
if (playerX){
    classList.add('X')
    playerX = !playerX
}else{
    classList.add('O')
    playerX =!playerX
    }
}

for(const square of squares){
    square.addEventListener('click', handleMoveSquare)
}




// startGame()

// function startGame(){
//     board = Array.from(Array(9).fill(null))
//     for(i= 0; i< squares.length ; i++){
//         squares[i].addEventListener('click', handleMove, false)  
//         turn =1
//         winner =null
//         render ()
//     }
// }
// function turn(square, player){ 
//     board[square]= player
//     document.getElementById(square).innerText= player
// }

// function handleMove(squares){
//     turn(squares.target.id, playerXO)
//     winner = findAWinner
// }



// function findAWinner() {
//     for (let i = 0; i < winningCombo.length; i++) {
//       if (Math.abs(board[winningCombo[i][0]] + board[winningCombo[i][1]] + board[winningCombo[i][2]]) === 3) return board[winningCombo[i][0]];
//     }
// }


// function render(){
//     let board = []

        
    // }
