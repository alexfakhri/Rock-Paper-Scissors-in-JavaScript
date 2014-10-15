describe('RockPaperScissors', function() {

	beforeEach(function () {
		rock = new Rock;
		paper = new Paper;
		scissors = new Scissors		
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
			
			beforeEach(function() {
				game = new RockPaperScissors
			});

		it('rock beats scissors', function() {
			expect(game.decideWinnerOf(rock, scissors)).toEqual("Rock")
		});

		it('scissors gets beaten by rock', function() {
			expect(game.decideWinnerOf(scissors, rock)).toEqual("Rock")
		});

		it('rock draws with rock', function() {
			expect(game.decideWinnerOf(rock, rock)).toEqual("Draw")
		});





	});


});