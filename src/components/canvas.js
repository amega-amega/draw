class Canvas {
    constructor(containerId, width, height) {
        this.container = document.getElementById(containerId);
        this.width = width;
        this.height = height;
        this.isDrawing = false;
        this.tool = 'pencil'; // default tool
        this.color = '#000000'; // default color
        this.size = 1; // default size
        this.canvas = null;
        this.ctx = null;
        this.initCanvas();
        this.addEventListeners();
    }

    initCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
    }

    addEventListeners() {
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
    }

    startDrawing(event) {
        this.isDrawing = true;
        this.ctx.beginPath();
        this.ctx.moveTo(event.offsetX, event.offsetY);
    }

    stopDrawing() {
        this.isDrawing = false;
        this.ctx.closePath();
    }

    draw(event) {
        if (!this.isDrawing) return;
        if (this.tool === 'pencil') {
            this.ctx.lineTo(event.offsetX, event.offsetY);
            this.ctx.strokeStyle = this.color;
            this.ctx.lineWidth = this.size;
            this.ctx.stroke();
        } else if (this.tool === 'eraser') {
            this.ctx.clearRect(event.offsetX, event.offsetY, this.size, this.size);
        }
    }

    setTool(tool) {
        this.tool = tool;
    }

    setColor(color) {
        this.color = color;
    }

    setSize(size) {
        this.size = size;
    }

    copyToClipboard() {
        const dataUrl = this.canvas.toDataURL();
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
            const canvasCopy = document.createElement('canvas');
            canvasCopy.width = this.width;
            canvasCopy.height = this.height;
            const ctxCopy = canvasCopy.getContext('2d');
            ctxCopy.drawImage(img, 0, 0);
            canvasCopy.toBlob(blob => {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]);
            });
        };
    }
}

export default Canvas;