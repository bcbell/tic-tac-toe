# tic-tac-toe
1. Define the required constants

2. Define the required variables used to track the state of the game

3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant.

4. Upon loading, the app should:
	4.1- Initialize the state variables
	4.2- Render those values to the page
	4.3- Wait for the user to click a square

5. Handle a player clicking a square

6. Handle a player clicking the replay button

                        Design Layout: 
Color Theme: 
Colors: Black and gold, Neon-Magenta,Electric Blue, Neon Yellow
Background-color: Black
Broad-color/square outline: Gold / Neon Yellow
Header Text: Orange border with yellow filler (lights) 
Other Text: White 

Font:
Heading: Merienda One
Text and X and O: Merienda One

Button:
Replay
Light to Dark 

                        Functionality:

Objective: 
To win game through clicking on squares that lead to a 3 aligned or adjustant X's or O's

Players: 
Player One: Human User
Player Two: Computer 

Constants:
Board
Player XO
winningCombo

Cached Element:
resetButton- when the reset button is click
table/squares- when the board is click 
light to dark- to change the lighting 
message- to display messages

Event Handlers:
There's an event handler to select the squares as well as to reset the game

Event Listeners:

There's an event listener to activate the each square as well as for the reset button

Function:

Functions theWinnerIs- to determine which letter to activate next in the game
findAWinner- ultizes the "theWinnerIs" function in the statusUpdate function to determine a winner based on the placement of the X's and O's which tiggers a message indicating the winner.

Brain Processing-

Player X clicks on square => yield an 'X' in the square => wins are recorded
Reset Button yields

render messages