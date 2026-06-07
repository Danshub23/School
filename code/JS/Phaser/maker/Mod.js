<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="phaser.js"></script>
    <script>
      var config = {
        type: Phaser.AUTO,
        width: 900,
        height: 550,
        backgroundColor: "0x00F2FF",
        scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH  // 自动居中
    },
        scene: {
          //autoCenter: Phaser.Scale.CENTER_BOTH,
          preload: preload,
          create: create,
          update: update,
        },
      };

      var game = new Phaser.Game(config);

      function preload() {
        //this.load.image("", "");
      }

      function create() {
        //this.player = this.add.sprite(400, 300, "ball");
      }

      function update() {
        
        }
    </script>
  </body>
</html>
