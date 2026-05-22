const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: {
        preload: preload,
        create: create
    }
};

function preload() {
    this.load.image('cyp', 'img/IMG_0876.jpeg');
}

function create() {
    this.add.image(800, 600, 'cyp');
}

const game = new Phaser.Game(config);
