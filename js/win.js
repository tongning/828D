var winState = {
	create: function() {
		var winLabel = gaem.add.text(80,80,'YOU WON!',
			{font: '50px Arial', fill:'#00ff00'});

		var startLabel = game.add.text(80, game.world.height - 80, 'Press W to start.',
			{font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Leyboard.W)

	},
};