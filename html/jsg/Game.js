const config = {
    type: Phaser.AUTO,      
    width: 1600,
    height: 1200,
    scene: {
        preload: function() {
            this.load.image('cyp', 'img/IMG_0876.jpeg');
            
        },
        create: function() {
            this.add.image(800, 600, 'cyp');
            
        }
    }
};
const game = new Phaser.Game(config);
