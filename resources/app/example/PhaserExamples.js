class State extends Phaser.Scene  {
    preload() {
        this.load.image('turkey', 'assets/images/turkey.jpg');
        this.load.html('textInput', 'assets/html/textInput.html');
    };

    create() {
        // Images
        var image = this.add.image(400, 300, 'turkey');
        image.addListener('click');
        image.on('click', function(event) {console.log('clicked')});
        image.setVisible(false);

        // Tween
        this.scene.tweens.add({targets: image, x: 50, y: 50, alpha: .5, duration: 2000, yoyo: true, ease: 'Power3'})

        // Text
        var text = this.add.text(10, 10, "Hello", {color: 'white', fontFamily: 'Arial', fontSize: '32px'});
        text.setText('New Text');

        // HTML Elements
        var input = this.add.dom(400, 600).createFromCache('textInput');
    };

    update() {
      
    };
}

module.exports = {
    state: State
};