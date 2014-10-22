

$('img').on('click', function() {
	var game = new RockPaperScissors
	var player = new Player
	var computer = new Computer
	var playerChoice = $(this).data('gesture');
	$('h2').text(game.decideWinnerOf(player.choiceToFunction(playerChoice), computer.getComputerGesture()));
});
