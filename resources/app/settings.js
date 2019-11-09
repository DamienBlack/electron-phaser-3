module.exports = {
    // The color of the window, which will show when the canvas width/height ratio is not equal to the screen ratio.
    // Should only show if the window size is changed, for example, when the dev tools are opened.
    windowBackgroundColor: '#4488AA',

    // The background color of the phaser canvas
    canvasBackgroundColor: '#223355',

    // When true, the chrome dev tools will open with ctrl-shift-I. For debugging.
    devToolsOpen: true,

    // The height of the canvas. The width will be auto generated to fill the screen.
    canvasHeight: 1080,

    // This will be set to the actual canvas resolution at runtime
    canvasResolution: {width: 0, height: 0}
};