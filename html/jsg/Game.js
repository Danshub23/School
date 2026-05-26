var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    // 加载资源
}

function create ()
{
    // 创建游戏对象
}

function update ()
{
    // 更新游戏逻辑
}
