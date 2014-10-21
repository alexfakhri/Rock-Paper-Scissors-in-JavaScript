describe('RockPaperScissors', function() {

	var player1, player2, game;

	beforeEach(function () {
		rock = new Rock;
		paper = new Paper;
		scissors = new Scissors;
		game = new RockPaperScissors;
		player = new Player;
		computer = new Computer;	
	});

	describe('gestures', function() {

		it('rock should be a rock', function() {
			expect(rock.type).toEqual("Rock")
		});

		it('paper should be a paper', function() {
			expect(paper.type).toEqual("Paper")
		});

		it('Scissors should be scissors', function() {
			expect(scissors.type).toEqual("Scissors")
		});

	});

	describe('rules of the game', function () {
			

		it('rock beats scissors', function() {
			expect(game.decideWinnerOf(rock, scissors)).toEqual("You win!!!")
		});

		it('scissors gets beaten by rock', function() {
			expect(game.decideWinnerOf(scissors, rock)).toEqual("Computer wins!")
		});

		it('rock draws with rock', function() {
			expect(game.decideWinnerOf(rock, rock)).toEqual("Wow! it's a draw")
		});

		it('scissors draws with scissors', function() {
			expect(game.decideWinnerOf(scissors, scissors)).toEqual("Wow! it's a draw")
		});

		it('Scissors beats paper', function() {
			expect(game.decideWinnerOf(scissors, paper)).toEqual("You win!!!")
		});

		it('Paper gets beaten by scissors', function() {
			expect(game.decideWinnerOf(paper, scissors)).toEqual("Computer wins!")
		});

		it('paper draws with paper', function() {
			expect(game.decideWinnerOf(paper, paper)).toEqual("Wow! it's a draw")
		});

		it('Paper beats rock', function() {
			expect(game.decideWinnerOf(paper, rock)).toEqual("You win!!!")
		});

		it('Rock gets beaten by paper', function() {
			expect(game.decideWinnerOf(rock, paper)).toEqual("Computer wins!")
		});
	});

});

describe('Player playing rock, paper, scissors', function() {

	describe('Should be able to select a gesture', function() {

		beforeEach(function() {
			player = new Player();
		});

		it('should generate a new instance of the  rock gesture passed to it', function() {
			player.choiceToFunction("Rock")
			expect(player.choice.type).toEqual("Rock")
		});

		it('should generate a new instance of the paper gesture passed to it', function() {
			player.choiceToFunction("Paper")
			expect(player.choice.type).toEqual("Paper")
		});

		it('should generate a new instance of the scissors gesture passed to it', function() {
			player.choiceToFunction("Scissors")
			expect(player.choice.type).toEqual("Scissors")
		});

		it('Should not generate a new instance if a random string is passed', function() {
			player.choiceToFunction("Something")	
			expect(player.choice).toBe(null)
		});

	});

});

describe('Computer to be able to choose a random gesture', function() {

		beforeEach(function() {
			computer = new Computer
		});

		it('should have three gestures to be able to pick from', function() {
			expect(computer.gestures.length).toEqual(3)
		});

		it('should be able to pick a gesture at random', function() {
			computer.getComputerGesture();
			expect(computer.chosenGesture).toBeDefined()
		});

});







