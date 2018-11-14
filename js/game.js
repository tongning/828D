var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('welcome', welcomeState);
game.state.add('menu', menuState);
game.state.add('play', playState);


game.state.start('boot');