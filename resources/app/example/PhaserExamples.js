class Scene extends Phaser.Scene  {
    preload() {
        this.load.image('turkey', 'assets/images/turkey.jpg');
        this.load.html('textInput', 'assets/html/textInput.html');
        this.load.audio('gobble', 'assets/audio/gobble.mp3')
    };

    create() {
        // Images
        this.turkey = this.add.image(400, 300, 'turkey');
        this.turkey.addListener('click');
        this.turkey.on('click', function(event) {console.log('clicked')});
        this.turkey.setScale(2);
        this.turkey.filpY = true;
        this.turkey.setVisible(false);

        // Group
        this.imageGroup = this.add.group();
        this.imageGroup.add(this.turkey);

        // Random
        this.turkey.x = Phaser.Math.Between(0, 200);

        // Tween
        this.scene.tweens.add({targets: this.turkey, x: 50, y: 50, alpha: .5, duration: 2000, yoyo: true, ease: 'Power3'});

        // Text
        this.mainText = this.add.text(10, 10, "Hello", {color: 'white', fontFamily: 'Arial', fontSize: '32px'});
        this.mainText.setText('New Text');

        // HTML Elements
        this.textInput = this.add.dom(400, 600).createFromCache('textInput');

        // Keyboard objects
        this.cursors = this.input.keyboard.createCursorKeys();
        var wKey = this.input.keyboard.addKey('W');

        // Sound Object
        this.gobbleSound = this.sound.add('gobble');
    };

    update() {
        // Movement
        this.turkey.angle += 3;
        this.turkey.y += 1;

        // Mouse Events
        this.input.on('pointermove', function (pointer) {
            console.log(pointer.x, pointer.y);
        });

        // Keyboard Events
        this.wKey.on('down', function(event) { console.log('W press') });
        this.wKey.on('up', function(event) { console.log('W release') });
        if (this.wKey.isDown) {
            console.log('W is down')
        }
        console.log(this.cursors.left.isDown);

        // Delayed event
        this.time.addEvent({
            delay: 1000,
            callback: function() {console.log('delayed event')},
            callbackScope: this,
            loop: false,
        })

        // Sound
        this.gobbleSound.play();
    };
}

module.exports = {
    scene: Scene
};