// 游戏配置对象
const config = {
    type: Phaser.AUTO,      // 渲染器类型，优先WebGL，失败则自动降级到Canvas
    width: 800,             // 游戏窗口宽度
    height: 600,            // 游戏窗口高度
    scene: {                // 游戏场景
        create: function() {
            // 在画面中央 (400, 300) 添加一段白色的文字
            this.add.text(400, 300, 'Hello Phaser!', {
                fontSize: '48px',
                fill: '#fff'
            }).setOrigin(0.5); // 设置文字中心点
        }
        function preload ()
{
    this.load.image('cyp', 'img/cyp.png');
    }
};

// 创建并启动游戏实例
const game = new Phaser.Game(config);
