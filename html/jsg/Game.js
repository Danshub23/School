// 游戏配置对象
const config = {
    type: Phaser.AUTO,      // 渲染器类型，优先WebGL，失败则自动降级到Canvas
    width: 800,             // 游戏窗口宽度
    height: 600,            // 游戏窗口高度
    scene: {
        preload: function() {
            // 修正图片扩展名（原为 .jepg，现改为常见 .jpeg 或 .jpg）
            this.load.image('cyp', 'img/IMG_0856.jpeg');
        },
        create: function() {
            // 在画面中央 (400, 300) 添加文字
            this.add.text(400, 300, 'Hello Phaser!', {
                fontSize: '48px',
                fill: '#fff'
            }).setOrigin(0.5);

            // 在画面中央添加图片 cyp
            this.add.image(400, 300, 'cyp');
        }
    }
};

// 创建并启动游戏实例
const game = new Phaser.Game(config);
