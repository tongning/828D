var menuState = {

	create: function() {
		var backgroundImage = game.add.sprite(0, 0, 'menu-bg');
		backgroundImage.width = game.width;
		backgroundImage.height = game.height;

		talkingHead = this.game.add.sprite(300, 80, 'talking-head');
		talkingHead.frame = 3;
		talkingHead.animations.add('animate', Array.from({length: 83}, (v, k) => k), 10, true);
		talkingHead.animations.play('animate');

		this.addMenuOption('Diamond Mine', 
		"Find the average weight of diamonds in the mine!\nDifficulty: Easy\nImpact: High",
		function () {
			game.state.start('play');
		});

		this.addMenuOption('Tropics', 
		"Find the average wingspan of birds in the forest!\nDifficulty: Hard\nImpact: Medium",
		function () {
			game.state.start('play');
		});
	},

	loadImages: function () {
		game.load.image('menu-bg', 'assets/images/menu-bg.jpg');
	},

	preload: function() {
		this.loadImages();
	},

	addMenuOption: function(title, description, callback) {
		var titleSubtitleVSpace = 50;
		var menuOptionVSpace = 150;

		var bigText = game.add.text(game.width - 500, (this.optionCount * menuOptionVSpace), title, style.navitem.default);
		bigText.inputEnabled = true;
		bigText.events.onInputUp.add(callback);
		bigText.events.onInputOver.add(function (target) {
		  target.setStyle(style.navitem.hover);
		});
		bigText.events.onInputOut.add(function (target) {
		  target.setStyle(style.navitem.default);
		});

		var smallText = game.add.text(game.width - 500, (this.optionCount * menuOptionVSpace + titleSubtitleVSpace), description, style.navitem.subtitle);
		this.optionCount ++;
	},

	init: function() {
		this.optionCount = 1;
	}
};