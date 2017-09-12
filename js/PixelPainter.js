var pixelPaint = document.getElementById("pixelPainter");

var gridDiv = document.createElement("div");
var colorDiv = document.createElement("div");
var eraseButton = document.createElement("button");
var clearButton = document.createElement("button");

gridDiv.id = "grid";
colorDiv.id = "colorGrid";
eraseButton.id = "erase";
clearButton.id = "clear";

pixelPainter.appendChild(gridDiv);
pixelPainter.appendChild(colorDiv);
pixelPainter.appendChild(eraseButton);
pixelPainter.appendChild(clearButton);

eraseButton.innerHTML = "Erase";
clearButton.innerHTML = "Clear";

function createGrid(width, height){
  for(var i = 0; i < width; i++){
    for(var j = 0; j < height; j++){
      var gridPixel = document.createElement("div");
      gridPixel.className = "gridPixel";
      gridDiv.appendChild(gridPixel);
    }
    var gridBreak = document.createElement("br");
    gridDiv.appendChild(gridBreak);
  }
}

createGrid(10, 10);