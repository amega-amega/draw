# Pixel Drawing App

## Overview
The Pixel Drawing App is a simple web application that allows users to create pixel art by drawing on a customizable canvas. Users can select the canvas size, choose drawing tools, and adjust colors and sizes to create their artwork.

## Features
- Centered "Draw" button to initiate the drawing interface.
- Modal window for selecting canvas resolution (width and height in pixels).
- Drawing interface with a customizable canvas.
- Tool selection for drawing (pencil and eraser).
- Color and size adjustment options for the drawing tools.
- Ability to copy the canvas content to the clipboard.

## Project Structure
```
pixel-drawing-app
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── main.css      # CSS styles for the application
│   ├── scripts
│   │   └── app.js        # Main JavaScript file for application logic
│   └── components
│       ├── modal.js      # Modal management for canvas resolution
│       └── canvas.js     # Canvas management for drawing
├── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic understanding of HTML, CSS, and JavaScript

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd pixel-drawing-app
   ```

### Running the Application
1. Open `src/index.html` in your web browser.
2. Click the "Draw" button to open the modal for selecting the canvas size.
3. Enter the desired width and height in pixels and confirm.
4. Start drawing on the canvas!

## Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements for the Pixel Drawing App.

## License
This project is open-source and available under the MIT License.