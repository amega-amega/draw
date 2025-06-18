const modal = require('./components/modal');
const Canvas = require('./components/canvas');

document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const canvasContainer = document.getElementById('canvas-container');
    let canvas;

    drawButton.addEventListener('click', () => {
        modal.openModal().then(resolution => {
            const [width, height] = resolution.split('x').map(Number);
            if (width > 0 && height > 0) {
                canvas = new Canvas(canvasContainer, width, height);
                canvas.init();
            } else {
                alert('Please enter valid dimensions.');
            }
        }).catch(() => {
            console.log('Modal closed without confirmation.');
        });
    });
});