// This game menu is adapted from https://github.com/MattMcFarland/phaser-menu-system.
var menuState = {

	create: function() {
		var backgroundImage = game.add.sprite(0, 0, 'menu-bg');
		backgroundImage.width = game.width;
		backgroundImage.height = game.height;

		this.addTalkingHead();
		this.addMenuTitle();
		this.addMenuOptions();
		this.addHealthBar(150, 500, "Reputation", 75);
		this.addHealthBar(450, 500, "Funding", 75);
		this.addQuote(150, 550);
	},

	addQuote: function(quoteX, quoteY) {
		var quoteText = game.add.text(
			quoteX, 
			quoteY, 
			"\"Keep it up! Collect high quality data to improve\nour reputation.\"", 
			style.quote.default);
	},

	addMenuTitle: function() {
		var titleText = game.add.text(
			game.width - 500, 
			100, 
			"~Select a mission~", 
			style.navitem.hover);
	},

	addMenuOptions: function() {
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

		this.addMenuOption('The Arctic', 
		"Find the average thickness of the arctic ice sheets.\nDifficulty: Medium\nImpact: Medium",
		function () {
			game.state.start('play');
		});
	},

	addHealthBar: function(barX, barY, barLabel, barPercent) {
		var barWidth = 250;
		var reputationBarX = barX + barWidth/2;
		var barY = barY;
		var barConfig = {
			x: reputationBarX, y: barY,
			width: barWidth,
			bar: {
				color: '#42f498'
			},
		};
		this.reputationHealthBar = new HealthBar(this.game, barConfig);
		this.reputationHealthBar.setPercent(barPercent);

		console.log(this.reputationHealthBar.width);
		var reputationLabel = game.add.text(
			barX, 
			barY - 50, 
			barLabel, 
			style.basiclabel.default);
	},

	addTalkingHead: function() {
		talkingHead = this.game.add.sprite(300, 80, 'talking-head');
		talkingHead.frame = 3;
		talkingHead.animations.add('animate', Array.from({length: 83}, (v, k) => k), 10, true);
		talkingHead.animations.play('animate');
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
		var headPadding = 50;

		var bigText = game.add.text(game.width - 500, (this.optionCount * menuOptionVSpace)+headPadding, title, style.navitem.default);
		bigText.inputEnabled = true;
		bigText.events.onInputUp.add(callback);
		bigText.events.onInputOver.add(function (target) {
		  target.setStyle(style.navitem.hover);
		});
		bigText.events.onInputOut.add(function (target) {
		  target.setStyle(style.navitem.default);
		});

		var smallText = game.add.text(game.width - 500, (this.optionCount * menuOptionVSpace + titleSubtitleVSpace)+headPadding, description, style.navitem.subtitle);
		this.optionCount ++;
	},

	init: function() {
		this.optionCount = 1;
	}
};