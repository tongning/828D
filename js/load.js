var loadState = {

	preload: function() {
		this.loadingLabel = game.add.text(160, 300, 'loading...',
			{font: '30px Courier', fill: '#ffffff'});

		/* 
		=== include any commonly reused sprites below ===
			game.load.image('player', 'assets/player.png');
			game.load.image('win', 'assets/win.png');
		*/
	},


	create: function() {
		var nameLabel = game.add.text(80, 80, 'PI Simulator',
			{font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80, game.world.height - 80, 'Press W to continue.',
			{font: '25px Arial', fill: '#ffffff'});


		this.sleep(2000).then(() => {
			this.loadingLabel.setText("Loaded!")
			var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
			wkey.onDown.addOnce(this.start, this);
		});
	},


	start: function() {
		game.state.start('menu');
	},


	sleep: function(time) {
  		return new Promise((resolve) => setTimeout(resolve, time));
	},

};