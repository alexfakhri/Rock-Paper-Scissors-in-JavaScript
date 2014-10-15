function RockPaperScissors() {};

function Rock() {
	this.type = "Rock";
};

function Paper() {
	this.type = "Paper";
};

function Scissors() {
	this.type = "Scissors";
};

RockPaperScissors.prototype.decideWinnerOf = function(gestureOne, gestureTwo) {
	if(gestureOne.type === gestureTwo.type)
		return "Draw";
	else if (gestureOne.type === "Rock") 
			return gestureOne.type;
	else 
		return gestureTwo.type;
		
};

