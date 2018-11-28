var welcomeState = {

	preload: function() {
		this.loadingLabel = game.add.text(160, 300, 'loading...',
			{font: '30px Courier', fill: '#ffffff'});
		this.loadScripts();
		this.loadFonts();
		/* 
		=== include any commonly reused sprites below ===
			game.load.image('player', 'assets/player.png');
			game.load.image('win', 'assets/win.png');
		*/
		game.load.spritesheet('talking-head', 'assets/sprites/talking-head.png', 255, 330);
		game.load.spritesheet('button', 'assets/sprites/button_sprite_sheet.png', 193, 71);
		game.load.spritesheet('home-button', 'assets/buttons/home.png',0);
		game.load.spritesheet('settings-cog', 'assets/buttons/settings.png',0);
		game.load.image('background', 'assets/images/empty_background.jpg');
		game.load.image('player', 'assets/sprites/ufo.png');
		game.load.image('supervisor', 'assets/all_sprites/asuna_by_vali233.png');
	},

	loadScripts: function () {
		game.load.script('style', 'js/lib/style.js');
		game.load.script('WebFont', 'js/lib/webfontloader.js');
		game.load.script('HealthBar', 'js/lib/HealthBar.standalone.js');
		game.load.script('jstat', 'js/lib/jstat.min.js');
	},

	create: function() {
		var nameLabel = game.add.text(80, 80, 'PI Simulator',
			{font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80, game.world.height - 80, 'Press W to continue.',
			{font: '25px Arial', fill: '#ffffff'});


		this.sleep(1000).then(() => {
			this.loadingLabel.setText("Loaded!")
			var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
			wkey.onDown.addOnce(this.start, this);
		});
	},


	start: function() {
		game.state.start('menu');
	},

	loadFonts: function () {
		WebFontConfig = {
		  custom: {
			families: ['TheMinion', 'BigSnow', 'Blacksword'],
			urls: ['assets/style/theminion.css', 'assets/style/bigsnow.css', 'assets/style/blacksword.css']
		  }
		}
	},

	sleep: function(time) {
  		return new Promise((resolve) => setTimeout(resolve, time));
	},

};