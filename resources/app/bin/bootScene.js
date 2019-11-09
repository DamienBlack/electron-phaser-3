class Startup extends Phaser.Scene {
    preload() {
        this.scene.start('Main');
    };
}

module.exports = {
    startup: Startup
};