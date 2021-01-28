var currentPlayer = 1;	//current player 1 or 2
var plays = 0;	//counts the number of plays or turns taken
var board = document.querySelector("#board");

board.b0.addEventListener("click", takeTurn);
board.b1.addEventListener("click", takeTurn);
board.b2.addEventListener("click", takeTurn);
board.b3.addEventListener("click", takeTurn);
board.b4.addEventListener("click", takeTurn);
board.b5.addEventListener("click", takeTurn);
board.b6.addEventListener("click", takeTurn);
board.b7.addEventListener("click", takeTurn);
board.b8.addEventListener("click", takeTurn);


function takeTurn(){
	if(currentPlayer == 1 && this.value == ""){
		this.value = "X";
		this.style.color = "red";
		currentPlayer = 2;
		plays++;
		if(plays >= 5){
			checkWin();
		}//inner if
	}//if
	else if(currentPlayer == 2 && this.value == ""){
		this.value = "O"
		this.style.color = "blue";
		currentPlayer = 1;
		plays++;
		if(plays >= 5){
			checkWin();
		}//inner if
	}//else if
	console.log("plays = " + plays);
}//end takeTurn function

function checkWin(){
	if(board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value != ""){
		announceWin(board.b0.value)
	}//if
	else if(board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value != ""){
		announceWin(board.b3.value)
	}//else if 1
	else if(board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b6.value != ""){
		announceWin(board.b6.value)
	}//else if 2
	else if(board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value != ""){
		announceWin(board.b0.value)
	}//else if 3
	else if(board.b1.value == board.b4.value && board.b4.value== board.b7.value && board.b1.value != ""){
		announceWin(board.b1.value)
	}//else if 4
	else if(board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b2.value != ""){
		announceWin(board.b2.value)
	}//else if 5
	else if(board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b0.value != ""){
		announceWin(board.b0.value)
	}//else if 6
	else if(board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value != ""){
		announceWin(board.b2.value)
	}//else if 7 
	else if(plays == 9){
		announceCatsGame();
	}//call cats game
	console.log("checked all");
}//end of checkWin

function announceWin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = "<img src='images/cross.png' alt='x' id='x'><h2>" + winner + " Wins!</h>";
	
	document.querySelector("#x").addEventListener("click", hidePopUp);
	
	document.querySelector("#container").style.display = "flex";
}//end of announceWin

function announceCatsGame(){
	document.querySelector("#container").style.display = "flex";
}//end of announceCatsGame

document.querySelector("#x").addEventListener("click", hidePopUp);

function hidePopUp(){
	document.querySelector("#container").style.display = "none";
}//end of hidePopUp


