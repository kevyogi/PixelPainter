var pixelPaint = document.getElementById("pixelPainter");
var colorArray = ["FAEBD7", "00FFFF", "7FFFD4", "000000", "0000FF", "8A2BE2", "A52A2A", "FF7F50", "DC143C", "006400", "FFD700", "DAA520", "ADFF2F", "FF0000", "FF8C00", "FFB6C1", "FFFF00", "40E0D0", "4169E1", "6A5ACD"];

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

for(var i = 0; i < colorArray.length; i++){
  var palette = document.createElement("div");
  palette.style.backgroundColor = colorArray[i];
  palette.className = "palette";
  colorDiv.appendChild(palette);
}

createGrid(10, 10);