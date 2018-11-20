var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('welcome', welcomeState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.totalFunding = 100000;
game.maxFunding = 1000000;
game.totalReputation = 30;
game.maxReputation = 100;


game.state.start('boot');