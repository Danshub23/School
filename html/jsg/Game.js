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
    this.load.image('img', 'img/IMG_0856.jpeg');
}

function create ()
{
    this.add.sprite(400, 300, 'logo').setName('logoName');
}

function update ()
{
    var sprite = this.children.getByName('logoName');
    sprite.x += 1;
    if (sprite.x > 1000){
        sprite.x = 0
    }
    
}
