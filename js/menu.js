// This game menu is adapted from https://github.com/MattMcFarland/phaser-menu-system.
var menuState = {
	init: function() {
		this.optionCount = 1;
	},


	preload: function() {
		this.loadImages();
		this.projects = this.generateProjects(3);
	},


	create: function() {
		var backgroundImage = game.add.sprite(0, 0, 'menu-bg');
		backgroundImage.width = game.width;
		backgroundImage.height = game.height;

		this.addTalkingHead();
		this.addMenuTitle();
		this.addMenuOptions();
		this.addQuote(150, 550);
		
		var repPercent = 100 * game.totalReputation / game.maxReputation;
		this.addHealthBar(150, 500, "Reputation", repPercent);
		var fundingPercent = 100 * game.totalFunding / game.maxFunding;
		this.addHealthBar(450, 500, "Funding", fundingPercent);

	},


	update: function() {
		game.date.setTime(game.date.getTime() + (game.time.elapsed * 60));
	},


	render: function() {
	    game.debug.text(game.date.toDateString(), 32, 32);
	    game.debug.text(game.date.toLocaleTimeString(), 32, 48);
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
			style.navitem.hover
			);
	},


	addMenuOptions: function() {
		var p1 = projects[0];
		var p2 = projects[1];
		var p3 = projects[2];

		this.addMenuOption(p1.title, p1.description + "\nFunding: " 
			+ p1.fundingAward + "\nRecommended Reputation: " + p1.recommendedRep,
			function () {
				game.state.start('play', false, false, p1);
		});

		this.addMenuOption(p2.title, p2.description + "\nFunding: " 
			+ p2.fundingAward + "\nRecommended Reputation: " + p2.recommendedRep,
			function () {
				game.state.start('play', false, false, p2);
		});

		this.addMenuOption(p3.title, p3.description + "\nFunding: " 
			+ p3.fundingAward + "\nRecommended Reputation: " + p3.recommendedRep,
			function () {
				game.state.start('play', false, false, p3);
		});



		// var project, population;

		// for (i=0; i<this.projects.length; i++) {
		//  	project = this.projects[i];
		//  	population = project.population;

		//  	this.addMenuOption(project.name, project.description 
		//  			+ "\nFunding: " + project.fundingAward 
		//  			+ "\nRecommended Reputation: " + project.recommendedRep,
		// 		function () {
		// 			game.state.start('play', false, false, population);
		// 	});
		// }

		// this.addMenuOption(p1.name, 
		// 	"Find the average weight of diamonds in the mine! \nFunding: " + p1.fundingAward
		// 		+ "\nRecommended Reputation: " + p1.recommendedRep,
		// 	function () {
		// 		game.state.start('play', false, false, population);
		// });

		// this.addMenuOption('Tropics', 
		// 	"Find the average wingspan of birds in the forest!\nDifficulty: Hard\nImpact: Medium",
		// 	function () {
		// 		game.state.start('play', false, false, population);
		// });

		// this.addMenuOption('The Arctic', 
		// 	"Find the average thickness of the arctic ice sheets.\nDifficulty: Medium\nImpact: Medium",
		// 	function () {
		// 		game.state.start('play', false, false, population);
		// });
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

		// console.log(this.reputationHealthBar.width);
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


	generateProjects: function(numProjects) {
		// Population( name, mean, stdv, prodPeriod, processCost, sprite )
		var pop1 = new Population('diamond', 10, 1, 'mm', 10, 200, 'assets/sprites/diamond.png');
		var pop2 = new Population('mushroom', 10, 2, 'cm', 15, 50, 'assets/sprites/mushroom.png');
		var pop3 = new Population('car', 3.5, 1, 'm', 15, 2000, 'assets/sprites/car.png');
		
		var env1 = new Environment('Desert', 'assets/tilemaps/maps/desert.json', 
			'assets/tilemaps/tiles/tmw_desert_spacing.png');

		var desc1 = 'Find the average weight of diamonds in the mine!';
		var desc2 = 'Find the average wingspan of birds in the forest!';
		var desc3 = 'Find the average thickness of the arctic ice sheets!';

		// Project( name, funding, population, recommendedRep )
		var p1 =new Project('Diamond Mine', desc1, 10000, pop1, env1, 20);
		var p2 = new Project('Tropics', desc2, 20000, pop2, env1, 60);
		var p3 = new Project('Arctic', desc3, 50000, pop3, env1, 100);


		projects = [p1,p2,p3];
		return projects;
	},

};