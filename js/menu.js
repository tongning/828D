var menuState = {

	create: function() {
		var nameLabel = game.add.text(110, 280, '{Lab Menu Goes on This Page}',
			{font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80, game.world.height - 80, 'Press E to start.',
			{font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.E);

		wkey.onDown.addOnce(this.start, this);
	},

	start: function() {
		game.state.start('play');
	},
};