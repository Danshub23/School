const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: function() {
            this.load.image('cyp', 'img/IMG_0876.jpeg');
        },
        create: function() {
            let image = this.add.image(400, 300, 'cyp');
            image.setScale(0.25);   // 缩小为原来的1/4
        }
    }
};

const game = new Phaser.Game(config);
