var pixelPaint = document.getElementById("pixelPainter");
var theTitle = document.getElementById("title");
var colorArray = ["FAEBD7", "00FFFF", "7FFFD4", "000000", "0000FF", "8A2BE2", "A52A2A", "FF7F50", "DC143C", "006400", "FFD700", "DAA520", "ADFF2F", "FF0000", "FF8C00", "FFB6C1", "FFFF00", "40E0D0", "4169E1", "6A5ACD"];
var myColor = "";
var onOff = 0;
var colorDiv = document.createElement("div");
var gridDiv = document.createElement("div");
var eraseButton = document.createElement("button");
var clearButton = document.createElement("button");
var currentColorBox = document.createElement("div");
var createButton = document.createElement("button");

gridDiv.id = "grid";
colorDiv.id = "colorGrid";
eraseButton.id = "erase";
clearButton.id = "clear";
currentColorBox.id = "colorBox";

pixelPainter.appendChild(colorDiv);
pixelPainter.appendChild(gridDiv);
colorGrid.appendChild(eraseButton);
colorGrid.appendChild(clearButton);
colorGrid.appendChild(currentColorBox);

eraseButton.innerHTML = "Erase";
clearButton.innerHTML = "Clear";
createButton.innerHTML = "Create";

function createGrid(length, width, pixelSize){
  for(var i = 0; i < length; i++){
    var pixelLine = document.createElement("div");
    pixelLine.className = "pixelLine";
    gridDiv.appendChild(pixelLine);
    for(var j = 0; j < width; j++){
      var gridPixel = document.createElement("div");
      gridPixel.className = "gridPixel";
      gridPixel.style.width = pixelSize.toString() + "px";
      gridPixel.style.height = pixelSize.toString() + "px";
      gridPixel.addEventListener("click", addColor);
      gridPixel.addEventListener("mouseover", paint);
      pixelLine.appendChild(gridPixel);
    }
  }
  for(var i = 0; i < colorArray.length;){
    var paletteLine = document.createElement("div");
    colorDiv.appendChild(paletteLine);
    for(var j = 0; j < 2; j++){
      var palette = document.createElement("div");
      palette.style.backgroundColor = colorArray[i];
      palette.className = "palette";
      palette.addEventListener("click", pickColor);
      paletteLine.appendChild(palette);
      i++;
    }
  }
  var pix = document.getElementsByClassName("gridPixel");
  var test = (parseInt(pix[0].style.width)*width) + ((width/10)*20);
  var test1 = test.toString() + "px";
  gridDiv.style.width = test1;
  theTitle.style.width = test1;
}

function pickColor(){
  myColor = this.style.backgroundColor;
  // this.style.border = "thick solid black";
  currentColorBox.style.backgroundColor = myColor;
  onOff = 1;
}

function addColor(){
  if(onOff === 0){
    this.style.backgroundColor = myColor;
    onOff = 1;
  }else if(onOff === 1){
    onOff = 0;
    this.style.backgroundColor = myColor;
  }
}

function paint(){
  if(onOff === 0){
    this.style.backgroundColor = myColor;
  }
}

eraseButton.addEventListener("click", erase);
function erase(){
  onOff = 0;
  myColor = "FFFFFF"
  this.style.backgroundColor = myColor;
  currentColorBox.style.backgroundColor = myColor;
}

clearButton.addEventListener("click", clear);
function clear(){
  var test = document.getElementsByClassName("gridPixel");
  for(var i = 0; i < test.length; i++){
    test[i].style.backgroundColor = "FFFFFF";
  }
  onOff = 1;
}

createGrid(50, 50, 10);