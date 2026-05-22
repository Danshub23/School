const config = {
    type: Phaser.AUTO,      
    width: 800,             
    height: 600,           
    scene: {
        preload: function() {
            // 修正图片扩展名（原为 .jepg，现改为常见 .jpeg 或 .jpg）
            this.load.image('cyp', 'img/IMG_0876.jpeg');
            
        },
        create: function() {
            this.add.image(400, 300, 'cyp');
            
        }
    }
};
const game = new Phaser.Game(config);
