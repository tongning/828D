var playState = {

    preload: function() {
        game.load.tilemap('desert', 'assets/tilemaps/maps/desert.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/tilemaps/tiles/tmw_desert_spacing.png');
        game.load.image('ufo', 'assets/sprites/ufo.png');
        game.load.image('diamond', 'assets/sprites/diamond.png');

    },


	create: function() {
        this.map = game.add.tilemap('desert');
        this.map.addTilesetImage('Desert', 'tiles');
        layer = this.map.createLayer('Ground');
        layer.resizeWorld();

        this.createPlayer()
        this.generateDiamonds(12)

        this.score = 0;
        this.scoreText = 'Score: ' + this.score;
    },


    update: function() {
        //game.physics.arcade.collide(player, layer);
        // this.player.body.angularVelocity = 0;
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -this.playerSpeed;
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = this.playerSpeed;
        } else if (this.cursors.up.isDown) { 
            this.player.body.velocity.y = -this.playerSpeed;
        } else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = this.playerSpeed;
        } 

        game.physics.arcade.overlap(this.player, this.diamonds, this.collectDiamond, null, this);
    },


    render: function() {
        game.debug.text('Collect All the Diamonds!', 32, 32, 'rgb(0,0,0)');
        // game.debug.text('Tile X: ' + layer.getTileX(this.player.x), 32, 48, 'rgb(0,0,0)');
        // game.debug.text('Tile Y: ' + layer.getTileY(this.player.y), 32, 64, 'rgb(0,0,0)');
        game.debug.text(this.scoreText, 32, 90, 'rgb(0,0,0)');
    },


    createPlayer: function() {
        this.player = game.add.sprite(450, 80, 'ufo');
        this.cursors = game.input.keyboard.createCursorKeys();

        this.player.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.player);
        this.playerSpeed = 250;

        game.camera.follow(this.player);
        this.player.body.collideWorldBounds = true;
    },


    generateDiamonds: function(totDiamonds) {
        // create stars
        this.diamonds = game.add.group();
        this.diamonds.enableBody = true;
        for (var i = 0; i < totDiamonds; i++) {
            locX = this.map.tileWidth * this.map.width * Math.random();
            locY = this.map.tileHeight * this.map.height * Math.random();
            var diamond = this.diamonds.create(locX , locY, 'diamond');
            // .body.gravity.y = 60;
            // .body.bounce.y = 0.7 + Math.random() * 0.2;
        }
    },


    collectDiamond: function (player, diamond) {
        diamond.kill();
        this.score += 10;
        this.scoreText = 'Score: ' + this.score;
    },
};
